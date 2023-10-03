# -*- coding: utf-8 -*-
from libqtile.command import lazy
from libqtile.config import Key, Drag, Click


class Keymaps():

    def __init__(self, mod):
        self.mod = mod
        self.keys = [
            Key([mod], "comma", lazy.layout.grow_main()),
            Key([mod], "period", lazy.layout.shrink_main()),
            Key([mod], "j", lazy.layout.down()),
            Key([mod], "k", lazy.layout.up()),
            Key([mod, "shift"], "j", lazy.layout.shuffle_down()),
            Key([mod, "shift"], "k", lazy.layout.shuffle_up()),
            Key([mod, "shift"], "comma", lazy.next_layout()),
            Key([mod], "b", lazy.window.toggle_floating()),
            Key([mod], "q", lazy.window.kill()),
            Key([mod], "Return", lazy.spawn('kitty'), desc="Launch terminal"),
            Key([mod, "control"], "s",
                lazy.spawn(".config/rofi/bin/menu_screenshot")),
            Key([mod], "p", lazy.spawn("kitty -e tera")),
            Key([mod, 'control'], "p", lazy.spawn("kitty -e cava")),
            Key([mod, "control"], "q",
                lazy.spawn(".config/rofi/bin/menu_powermenu")),
            Key([mod], "c",
                lazy.spawn(
                    "rofi  -show calc -modi calc:.config/rofi/bin/rofi-calc.sh"
                )),
            Key([mod], "Tab", lazy.spawn("rofi -show window")),
            Key([mod], "s", lazy.spawn("rofi -show ssh")),
            Key([mod], "a", lazy.spawn(".config/rofi/bin/menu_apps")),
            Key([mod, "control"], "a",
                lazy.spawn(".config/rofi/bin/launcher_slate")),
            Key([mod], "i", lazy.spawn(".config/rofi/bin/menu_time")),
            Key([mod], "v", lazy.spawn(".config/rofi/bin/menu_volume")),
            Key([mod, "control"], "e",
                lazy.spawn("rofi -show emoji -modi emoji")),
            Key([mod, "control"], "f",
                lazy.spawn(
                    "rofi  -show find -modi find:~/.config/rofi/bin/finder.sh")
                ),
            Key([mod, "control"], "c",
                lazy.spawn(".config/rofi/bin/rofi-configmenu.sh")),
            Key([mod, "control"], "Return", lazy.spawncmd()),
            Key([mod, "control"], "r", lazy.restart()),
            Key([mod], "space", lazy.window.toggle_fullscreen()),
            Key([mod, "control"], "w", lazy.hide_show_bar("top")),
            Key([], "XF86AudioRaiseVolume", lazy.spawn("pulseaudio-ctl up 5")),
            Key([], "XF86AudioLowerVolume",
                lazy.spawn("pulseaudio-ctl down 5")),
            Key([], "XF86AudioMute", lazy.spawn("pulseaudio-ctl set 1")),
            Key([mod, "control"],
                "space",
                lazy.widget["keyboardlayout"].next_keyboard(),
                desc="Next keyboard layout."),
            Key([mod, "shift"],
                "period",
                lazy.prev_screen(),
                desc='Move focus to prev monitor'),
        ]
        self.mouse = [
            Drag(
                [mod],
                "Button1",
                lazy.window.set_position_floating(),
                start=lazy.window.get_position(),
            ),
            Drag([mod],
                 "Button3",
                 lazy.window.set_size_floating(),
                 start=lazy.window.get_size()),
            Click([mod], "Button2", lazy.window.bring_to_front()),
        ]
