import { QuizStateInterface } from './quizzes.types';

export const initialState: QuizStateInterface = {
  activeQuizzId: '',
  filter: '',
  quizzes: [
    {
      id: '1adawq231231',
      title: 'React',
      questions: [
        {
          id: 'Init-quizz-1231l134ad4',
          title: 'Який тип данних у параметра пропс',
          correctIndex: 1,
          options: ['Масив', "Об'єкт", 'Рядок', 'Функція'],
        },
        {
          id: 'Init-quizz-1231lk3134',
          title:
            "Значення якого атрибуту компонентів Field має збігатися з іменами властивостей об'єкта в initialvalue",
          correctIndex: 1,
          options: ['value', 'name', 'type', 'data'],
        },
        {
          id: 'Init-quizz-12lgwa34ad4',
          title: 'Яке значення за замовчуванням у індикатора завантаження',
          correctIndex: 2,
          options: ['true', 'null', 'false', 'undefines'],
        },
        {
          id: 'Init-quizz-1gwq34ad4',
          title:
            'Яка функція використовується для оновлення стану компонента в React?',
          correctIndex: 0,
          options: [
            'setState()',
            'updateState()',
            'changeState()',
            'modifyState()',
          ],
        },
        {
          id: 'Init-quizz-12k34ad4',
          title:
            'Яким методом компонент React визначає вміст, який він поверне?',
          correctIndex: 3,
          options: [
            'renderComponent()',
            'defineContent()',
            'getComponentContent()',
            'render()',
          ],
        },
        {
          id: 'Init-quizz-12lwq34ad4',
          title: 'Що таке JSX в React?',
          correctIndex: 0,
          options: [
            'Розширений синтаксис JavaScript для опису інтерфейсу користувача',
            'JavaScript XML',
            'JSON для React',
            'JavaScript Extension',
          ],
        },
        {
          id: 'Init-quizz-1ljwq34ad4',
          title: 'Як React компонує компоненти разом?',
          correctIndex: 1,
          options: [
            'За допомогою методу composeComponent()',
            'Використовуючи JSX',
            'За допомогою методу joinComponents()',
            'Розділенням логіки на компоненти',
          ],
        },
        {
          id: 'Init-quizz-1kj234k3tqwe',
          title: 'Що таке властивість key у React?',
          correctIndex: 3,
          options: [
            'Ідентифікатор компонента',
            'Ключ для доступу до стилів',
            'Ключ для пошуку компонента',
            'Унікальний ідентифікатор елемента в списку',
          ],
        },
        {
          id: 'Init-quizz-1kjfq2lkj',
          title: 'Як можна передати дані батьківському компоненту в React?',
          correctIndex: 1,
          options: [
            'За допомогою методу getParentData()',
            'Через контекст',
            'За допомогою методу passDataToParent()',
            'Через props',
          ],
        },
        {
          id: 'Init-quizz-1vjlqwoi42',
          title:
            'Яка функція викликається при першому відображенні компонента в React?',
          correctIndex: 2,
          options: ['render()', 'update()', 'componentDidMount()', 'create()'],
        },
        {
          id: 'Init-quizz-1fj3tj3l',
          title:
            'Чим відрізняється React-компонент класу від функціонального компонента?',
          correctIndex: 0,
          options: [
            'Використання класу для створення компонента проти використання функції',
            'Класи мають більше функціональності',
            'Функціональні компоненти є застарілими',
            'Класи мають ширший діапазон застосування',
          ],
        },
        {
          id: 'Init-quizz-12f8v94j3',
          title: 'Як можна змінити стан компонента в React?',
          correctIndex: 2,
          options: [
            'Змінюючи прямо властивість state',
            'Викликаючи функцію changeState()',
            'Використовуючи метод setState()',
            'Змінюючи state як звичайну змінну',
          ],
        },
        {
          id: 'Init-quizz-1v98dghw9s',
          title:
            'Який метод викликається перед тим, як компонент буде видалено в React?',
          correctIndex: 1,
          options: [
            'componentDidUpdate()',
            'componentWillUnmount()',
            'componentWillUpdate()',
            'componentDidMount()',
          ],
        },
        {
          id: 'Init-quizz-1n98djhwd',
          title:
            'Чому важливо використовувати ключі при відображенні списків у React?',
          correctIndex: 3,
          options: [
            'Для забезпечення безпеки',
            'Для збереження внутрішнього стану компонента',
            'Для підвищення продуктивності',
            'Для ефективного відображення змін в списку',
          ],
        },
      ],
    },
    {
      id: '1adawq231adaad1',
      title: 'Що в консолі?',
      questions: [
        {
          id: 'Init-quizz-12121234',
          title: 'Який буде вивід у консоль?',
          code: `const promise1 = Promise.resolve(3); \n 
const promise2 = new Promise((resolve, reject) => { \n 
  setTimeout(resolve, 100, 'foo'); \n 
});\n 
Promise.all([promise1, promise2]).then((values) => { \n 
  console.log(values); \n 
});\n `,
          correctIndex: 1,
          options: [
            "[3, 'foo']",
            "['foo', 3]",
            '[3, undefined]',
            "['foo', undefined]",
          ],
        },
        {
          id: 'q2',
          title: `Що виведе на екран консолі JavaScript в наступному виразі:`,
          code: `console.log(typeof 'hello')?`,
          correctIndex: 1,
          options: ['string', 'object', 'number', 'undefined'],
        },
        {
          id: 'q3',
          title: `Яким буде результат виразу:`,
          code: `[1, 2, 3].concat([4, 5, 6]) ?`,
          correctIndex: 3,
          options: [
            '[1, 2, 3]',
            '[1, 2, 3, 4, 5, 6]',
            '[1, 2, 3, [4, 5, 6]]',
            '[1, 2, 3, 4, 5, 6]',
          ],
        },
        {
          id: 'q5',
          title: `Яке значення поверне вираз?`,
          code: `(true || false) && true`,
          correctIndex: 3,
          options: ['true', 'false', 'null', 'true'],
        },
        {
          id: 'q6',
          title: `Які будуть значення у масиві після виконання наступного коду?`,
          code: `var arr = []; \n
for (var i = 0; i < 5; i++) { \n
arr.push(i); \n
}`,
          correctIndex: 0,
          options: [
            '[0, 1, 2, 3, 4]',
            '[1, 2, 3, 4, 5]',
            '[1, 2, 3, 4]',
            '[0, 1, 2, 3]',
          ],
        },
        {
          id: 'q7',
          title: `Яке значення поверне виклик функції?`,
          code: `function add(a, b) { \n
return a + b; \n
}\n
add(2, '3');`,
          correctIndex: 1,
          options: ['5', '23', '32', 'NaN'],
        },
        {
          id: 'q8',
          title: `Яке значення буде у змінній 'counter' після виконання наступного коду?`,
          code: `function createCounter() { \n
  let count = 0; \n 
  return function() { \n
return ++count; \n
  }\n
}\n
const counter = createCounter();\n
counter();\n
counter();`,
          correctIndex: 2,
          options: ['0', '1', '2', '3'],
        },
        {
          id: 'q9',
          title: `Яке значення буде виведено в консоль після виконання наступного коду?`,
          code: `console.log('Start');\n 
setTimeout(() => console.log('Inside setTimeout'), 0);\n
console.log('End'); \n`,
          correctIndex: 1,
          options: [
            'Start Inside setTimeout End',
            'Start End Inside setTimeout',
            'Inside setTimeout Start End',
            'Inside setTimeout End Start',
          ],
        },
        {
          id: 'q10',
          title: `Яке значення буде виведено в консоль після виконання наступного коду?`,
          code: `const promise1 = Promise.resolve(3);\n
const promise2 = new Promise((resolve, reject) => {\n
  setTimeout(resolve, 100, 'foo');\n
});\n
\n
Promise.all([promise1, promise2]).then((values) => {\n
  console.log(values);\n
}); \n`,
          correctIndex: 0,
          options: [
            "[3, 'foo']",
            "['foo', 3]",
            '[3, undefined]',
            "['foo', undefined]",
          ],
        },
        {
          id: 'q11',
          title: `Який результат буде виведено в консоль після виконання наступного коду?`,
          code: `function microTask() {\n
  Promise.resolve().then(() => console.log('Microtask 1'));\n
  console.log('Microtask 2');\n
}\n
function macroTask() {\n
  setTimeout(() => console.log('Timeout 1'), 0);\n
  console.log('Timeout 2');\n
}\n
function asyncFunction() {\n
  return new Promise((resolve) => {\n
    setTimeout(() => resolve('Async Function'), 100);\n
  });\n
}\n
async function main() {\n
  console.log('Start');\n
  microTask();\n
  await asyncFunction();\n
  macroTask();\n
  console.log('End');\n
}\n
main();\n`,
          correctIndex: 0,
          options: [
            'Start, Microtask 2, Microtask 1, Timeout 2, Async Function, Timeout 1, End',
            'Start, Microtask 2, Microtask 1, Async Function, Timeout 2, Timeout 1, End',
            'Start, Microtask 2, Async Function, Microtask 1, Timeout 2, Timeout 1, End',
            'Start, Microtask 2, Async Function, Microtask 1, Timeout 1, Timeout 2, End',
          ],
        },
      ],
    },
  ],
};
