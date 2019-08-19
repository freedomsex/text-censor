/*
  Простой фильтр для цензурирования цифр словами,
  когда сумма или номер телефона записаны словами а не цифрами.
  Находит в том чисте смесь цифр со словами.
  Имеется ограничение минимум 5 символов, настраивается.
*/
export default {
  count: 5,

  say: [
    ['ноль', 'нолик', 'ноличек'],
    ['один', 'единица', 'единичка'],
    ['два', 'двойка', 'двоечка'],
    ['три', 'тройка', 'троечка'],
    ['четыре', 'четверка', 'четверочка'],
    ['пять', 'пятерка', 'пятерочка'],
    ['шесть', 'шестерка', 'шестерочка'],
    ['семь', 'семерка', 'семерочка'],
    ['восемь', 'восьмерка', 'восьмерочка'],
    ['девять', 'девятка', 'девяточка'],
  ],

  pattern(count) {
    let result = '';
    let i, num;
    for (i = 0; i < 10; i++) {
      num = this.say[i];
      result += i ? '|' : '';
      result += `(${num[0]}|${num[1]}|${num[2]}|\\d).*?`;
    }
    const repeat = count || this.count;
    return new RegExp(`(${result}){${repeat},}`, 'gi');
  },

  install({prototype: {$filters}}) {
    $filters.add('say_number', {pattern: this.pattern()});
  },
};