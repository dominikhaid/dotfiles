# -*- coding: utf-8 -*-
from libqtile.command import lazy
import os


class Colors():

    def load_colors(self, wal_cache):
        self.colors = []
        with open(wal_cache, 'r') as file:
            for i in range(8):
                self.colors.append(file.readline().strip())
        self.colors.append('#ffffff')
        self.colors.append('#282a36')
        self.map_colors()
        lazy.reload()

    def set_default_colors(self):
        self.colors = [
            "#0F1223", "#645990", "#927399", "#C27685", "#6B8BD3", "#A88CAB",
            "#DCA6A5", "#f5dec8", "#ab9b8c", "#645990", "#927399", "#C27685",
            "#6B8BD3", "#A88CAB", "#DCA6A5", "#f5dec8", "#ffffff", "#282a36"
        ]
        self.map_colors()
        lazy.reload()

    def map_colors(self):
        self.colors = {
            "panel_color": self.colors[9],
            "wg_bg": self.colors[1],
            "wg_fg": self.colors[9],
            "gray": self.colors[9],
            "gray_light": self.colors[7],
            "tray_bg": self.colors[3],
            "tray_fg": self.colors[8],
            "notify_bg": self.colors[3],
            "notify_fg": self.colors[8],
            "state_bg": self.colors[6],
            "state_fg": self.colors[9],
            "sys_bg": self.colors[9],
            "sys_fg": self.colors[2],
            "layout_bg": self.colors[9],
            "layout_fg": self.colors[5],
            "white": self.colors[8]
        }

    def __init__(self, home):
        self.colors = []
        wal_cache = home + "/.cache/wal/colors"
        if os.path.isfile(wal_cache):
            self.load_colors(wal_cache)
        else:
            self.set_default_colors()
