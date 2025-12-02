import type { MenuItem } from "../types/menuItem.types";

export const MENU_ITEMS: MenuItem[] = [
    { label: 'No child btn' },
    {
        label: 'Phones',
        children: [{ label: 'IPhone' }, { label: 'Samsung' }]
    },
    {
        label: 'TVs',
        children: [{ label: 'LG' }, { label: 'Xiaomi' }]
    }
]