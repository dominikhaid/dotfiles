# -*- coding: utf-8 -*-
from libqtile.config import Match
from libqtile import layout
import os


class Settings():

    def __init__(self):
        self.home = os.path.expanduser('~')
        self.focus_on_window_activation = "smart"
        self.dgroups_key_binder = None
        self.dgroups_app_rules = []
        self.main = None
        self.follow_mouse_focus = True
        self.bring_front_click = True
        self.cursor_warp = False
        self.auto_fullscreen = True
        self.extentions = []
        self.wmname = "LG3D"
        self.floating_rules = layout.Floating(float_rules=[
            # Run the utility of `xprop` to see the wm class and name of an X client.
            *layout.Floating.default_float_rules,
            Match(title='Confirmation'),
            Match(title='Qalculate!'),
            Match(wm_class='kdenlive'),
            Match(wm_class='pinentry-gtk-2'),
        ])
