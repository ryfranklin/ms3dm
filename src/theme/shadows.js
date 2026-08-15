/**
 * Homebase elevation ramp.
 *
 * The system reads as hairline borders on near-black, not stacked Material
 * shadows. So low elevations (cards, AppBar, default Paper) are flat and rely on
 * their 1px border for definition. Depth is reserved for true overlays:
 * menus/popovers get a moderate shadow, dialogs/modals get the deep one.
 */
const shadows = () => {
  const none = 'none';
  // Menus, popovers, dropdowns (MUI elevation ~5 to 8).
  const overlay = '0 18px 50px rgba(0,0,0,0.5)';
  // Dialogs / modals (MUI elevation ~9 and up).
  const modal = '0 40px 120px rgba(0,0,0,0.5)';

  return [
    none, // 0
    none, // 1  (AppBar elevation 1, Card default)
    none, // 2
    none, // 3
    none, // 4
    overlay, // 5
    overlay, // 6
    overlay, // 7
    overlay, // 8  (Menu, Popover, Autocomplete)
    modal, // 9
    modal, // 10
    modal, // 11
    modal, // 12
    modal, // 13
    modal, // 14
    modal, // 15
    modal, // 16
    modal, // 17
    modal, // 18
    modal, // 19
    modal, // 20
    modal, // 21
    modal, // 22
    modal, // 23
    modal, // 24 (Dialog)
  ];
};

export default shadows;
