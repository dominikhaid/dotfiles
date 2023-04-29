# -*- coding: utf-8 -*-
from libqtile import widget


class Widgets():

    def __init__(self, home, defaults, colors):
        self.defaults = defaults
        self.widgets_prime = [
            widget.GroupBox(
                font=self.defaults['font'],
                fontsize=self.defaults['fontsize_max'],
                active=colors['white'],
                inactive=colors['white'],
                rounded=False,
                highlight_color=colors['wg_fg'],
                urgent_text=colors['notify_bg'],
                urgent_alert_method="border",
                disable_drag=True,
                highlight_method="block",
                this_current_screen_border=colors['notify_bg'],
                this_screen_border=colors['wg_fg'],
                other_current_screen_border=colors['notify_bg'],
                other_screen_border=colors['wg_fg'],
                foreground=colors['wg_fg'],
                background=colors['wg_fg'],
            ),
            widget.Sep(
                foreground=colors['panel_color'],
                background=colors['panel_color'],
            ),
            widget.Prompt(),
            widget.Notify(
                foreground=colors['notify_fg'],
                background=colors['notify_bg'],
            ),
            widget.WindowName(
                foreground=colors['notify_fg'],
                background=colors['notify_bg'],
            ),
            widget.Sep(
                foreground=colors['panel_color'],
                background=colors['panel_color'],
            ),
            widget.Clock(
                foreground=colors['state_fg'],
                background=colors['state_bg'],
                format="%A, %B %d  [ %H:%M ]",
            ),
            widget.Memory(foreground=colors['state_fg'],
                          background=colors['state_bg']),
            widget.Net(
                interface="enp27s0",
                format="{down} ↓↑ {up}",
                foreground=colors['state_fg'],
                background=colors['state_fg'],
                padding=self.defaults['padding_min'],
            ),
            widget.TextBox(text=" Vol:",
                           foreground=colors['state_fg'],
                           background=colors['state_bg'],
                           padding=0),
            widget.Volume(foreground=colors['state_fg'],
                          background=colors['state_bg'],
                          padding=self.defaults['padding_min']),
            widget.Sep(
                padding=self.defaults['padding_min'],
                foreground=colors['state_bg'],
                background=colors['state_bg'],
            ),
            widget.Sep(foreground=colors['panel_color'],
                       background=colors['panel_color']),
            widget.CurrentLayoutIcon(
                custom_icon_paths=[home + "/.config/qtile/icons"],
                background=colors['notify_bg'],
                scale=0.7,
            ),
            widget.Sep(foreground=colors['notify_bg'],
                       background=colors['notify_bg']),
            widget.Sep(foreground=colors['panel_color'],
                       background=colors['panel_color']),
            widget.Sep(
                foreground=colors['panel_color'],
                background=colors['panel_color'],
            ),
            widget.KeyboardLayout(foreground=colors['white'],
                                  font=self.defaults['font'],
                                  background=colors['sys_bg'],
                                  configured_keyboards=['de', 'us']),
            widget.Systray(font=self.defaults['font'],
                           foreground=colors['sys_fg'],
                           background=colors['sys_bg'],
                           padding=self.defaults['padding_min'],
                           opacity=0),
            widget.Sep(
                padding=self.defaults['padding_max'],
                foreground=colors['sys_bg'],
                background=colors['sys_bg'],
            ),
        ]
        self.widgets_second = [
            widget.GroupBox(
                font=self.defaults['font'],
                fontsize=self.defaults['fontsize_max'],
                active=colors['white'],
                inactive=colors['gray'],
                rounded=False,
                highlight_color=colors['wg_fg'],
                urgent_text=colors['notify_bg'],
                urgent_alert_method="border",
                disable_drag=True,
                highlight_method="block",
                this_current_screen_border=colors['notify_bg'],
                this_screen_border=colors['wg_fg'],
                other_current_screen_border=colors['notify_bg'],
                other_screen_border=colors['wg_fg'],
                foreground=colors['wg_fg'],
                background=colors['wg_fg'],
            ),
            widget.Sep(
                foreground=colors['panel_color'],
                background=colors['panel_color'],
            ),
            widget.Prompt(),
            widget.Notify(foreground=colors['notify_fg'],
                          background=colors['notify_bg']),
            widget.WindowName(
                foreground=colors['notify_fg'],
                background=colors['notify_bg'],
            ),
            widget.Sep(
                foreground=colors['panel_color'],
                background=colors['panel_color'],
            ),
            widget.CurrentLayoutIcon(
                custom_icon_paths=[home + "/.config/qtile/icons"],
                foreground=colors['notify_fg'],
                background=colors['notify_bg'],
                scale=0.7,
            ),
            widget.Sep(
                foreground=colors['notify_fg'],
                background=colors['notify_bg'],
            ),
            widget.Sep(
                foreground=colors['panel_color'],
                background=colors['panel_color'],
            ),
            widget.Sep(
                foreground=colors['panel_color'],
                background=colors['panel_color'],
            )
        ]
