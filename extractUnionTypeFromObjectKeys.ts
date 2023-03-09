const menuOptions = {
    breakfast: {
        label: 'Breakfast',
    },
    lunch: {
        label: 'Lunch',
    },
    dinner: {
        label: 'Dinner',
    },
};

type MenuOptions = keyof typeof menuOptions;