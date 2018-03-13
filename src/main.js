import { getBoxStyle } from './shapes.js'

const boxes = [];

    for (let i = 1; i < 21; i++) {
        if (i % 3 === 0) {
            boxes.push (
                React.createElement('div', { style: getBoxStyle(i -1), key: i }, i+1,
                (React.createElement('strong', {}, 'Fizz')))
            );
        } else if (i % 5 === 0) {
            boxes.push (
            React.createElement('div', { style: getBoxStyle(i -1), key: i }, i+1,
                (React.createElement('strong', {}, 'Buzz')))
            );
        } else if (i % (3 && 5) === 0) {
            boxes.push (
            React.createElement('div', { style: getBoxStyle(i -1), key: i }, i+1,
                (React.createElement('strong', {}, 'FizzBuzz')))
            );
        } else {
            boxes.push (
            React.createElement('div', { style: getBoxStyle(i -1), key: i }, i+1,
                (React.createElement('strong', {}, i)))
            );
        }
    }

ReactDOM.render(
    React.createElement('div', {}, boxes),
    document.getElementById('app')
);