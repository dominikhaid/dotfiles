from libqtile import layout


class Layouts():

    def __init__(self, colors):
        layout_theme = {
            "border_width": 3,
            "margin": 0,
            "border_focus": colors['notify_bg'],
            "border_normal": colors['sys_bg'],
        }
        self.layouts = [
            layout.Spiral(**layout_theme),
            layout.Max(**layout_theme),
            layout.Floating(**layout_theme),
        ]
