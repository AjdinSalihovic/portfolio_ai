#!/usr/bin/env python3
"""
Local preview that behaves like GitHub Pages.

Why this exists: the site uses clean URLs (/work instead of /work.html).
GitHub Pages resolves those automatically, but opening the files directly
in a browser does not -- and neither does `python3 -m http.server`.

Usage:  python3 serve.py     then open http://localhost:8000
"""
import http.server
import os
import socketserver
import urllib.parse

PORT = 8000
ROOT = os.path.dirname(os.path.abspath(__file__))


class GitHubPagesHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        rel = urllib.parse.urlparse(path).path.lstrip("/")
        full = os.path.join(ROOT, rel)

        if rel == "" or rel.endswith("/"):
            index = os.path.join(full, "index.html")
            if os.path.isfile(index):
                return index
        if os.path.isfile(full):
            return full
        # the GitHub Pages behaviour: /work -> work.html
        if os.path.isfile(full + ".html"):
            return full + ".html"
        return full


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), GitHubPagesHandler) as httpd:
        print(f"Serving {ROOT}")
        print(f"Open http://localhost:{PORT}  (Ctrl+C to stop)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
