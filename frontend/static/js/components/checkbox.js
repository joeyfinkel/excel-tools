import { onclick as rightArrowOnclick } from './sheetView.js';

export const checkbox = (name) => {
  const box = document.createElement('input');

  box.type = 'checkbox';
  box.id = `${name}-check`;
  box.class = 'sheet-check';
  box.name = name;
  box.addEventListener('click', () => console.log(box.name));

  return box;
};

export const onclick = (templateType) => {
  const checkboxes = document.querySelectorAll('.sheet-check');

  checkboxes &&
    checkboxes.forEach((box) =>
      box.addEventListener(
        'change',
        () =>
          rightArrowOnclick(templateType, box.id, {
            columns: ['Id', 'Test 1', 'Test 2'],
            title: 'Columns',
          }),
        false
      )
    );
};