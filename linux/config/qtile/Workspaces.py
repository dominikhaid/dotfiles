# -*- coding: utf-8 -*-
from libqtile.config import Match, Key, Group
from libqtile.command import lazy


class Workspaces():

    def catch_windows(client):
        return True

    def set_workspaces(self, keys, mod):
        self.groups = []
        for workspace in self.workspaces:
            persist = workspace["persist"] if "persist" in workspace else None
            init = workspace["init"] if "init" in workspace else None
            position = workspace[
                "position"] if "position" in workspace else None
            exclusive = workspace[
                "exclusive"] if "exclusive" in workspace else None
            matches = workspace["matches"] if "matches" in workspace else None
            layouts = workspace["layout"] if "layout" in workspace else None
            if workspace["name"] == "":
                self.groups.append(
                    Group(workspace["name"],
                          init=init,
                          matches=[Match(func=self.catch_windows)],
                          position=position,
                          layout=layouts))
            else:
                self.groups.append(
                    Group(workspace["name"],
                          init=init,
                          position=position,
                          exclusive=exclusive,
                          persist=persist,
                          matches=matches,
                          layout=layouts))
                keys.append(
                    Key([mod], workspace["key"],
                        lazy.group[workspace["name"]].toscreen()))
                keys.append(
                    Key([mod, "shift"], workspace["key"],
                        lazy.window.togroup(workspace["name"])))

    def __init__(self, keys, mod):
        self.groups = []
        self.workspaces = [
            {
                "name": "",
                "key": "h",
                "layout": "spiral",
                "matches": [Match(title=['nvim', 'code'])],
                "persist": True,
                "exclusive": False,
                "position": 1,
                "init": True
            },
            {
                "name": "",
                "key": "t",
                "layout": "spiral",
                "matches": [Match(wm_class=['kitty'])],
                "persist": False,
                "exclusive": False,
                "position": 2,
                "init": False
            },
            {
                "name":
                "",
                "key":
                "w",
                "layout":
                "spiral",
                "matches": [
                    Match(wm_class=[
                        'Firefox', 'google-chrome-stable', 'google-chrome'
                    ])
                ],
                "exclusive":
                False,
                "persist":
                False,
                "position":
                3,
                "init":
                False
            },
            {
                "name": "",
                "key": "e",
                "layout": "spiral",
                "matches": [Match(wm_class=['pcmanfm'])],
                "exclusive": False,
                "persist": False,
                "position": 4,
                "init": False
            },
            {
                "name": "",
                "key": "m",
                "layout": "spiral",
                "matches": [Match(wm_class=['Kodi', 'spotify', 'youtube'])],
                "exclusive": False,
                "persist": False,
                "position": 5,
                "init": False
            },
            {
                "name": "",
                "key": "d",
                "layout": "spiral",
                "matches": [Match(wm_class=['dbeaver', 'pgadmin'])],
                "exclusive": False,
                "persist": False,
                "position": 6,
                "init": False
            },
            {
                "name": "",
                "key": "u",
                "layout": "spiral",
                "exclusive": False,
                "persist": True,
                "position": 7,
                "init": True
            },
        ]
        self.set_workspaces(keys, mod)
