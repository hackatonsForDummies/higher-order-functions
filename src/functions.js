'use strict'

const arrayOfElements = [
  {
    "name": "a",
    "subElements":
      [
        {"surname": 1},
        {"surname": 2}
      ]
  },
  {
    "name": "b",
    "subElements":
      [
        {"surname": 3},
        {"surname": 1}
      ]
  },
  {
    "name": "c",
    "subElements":
      [
        {"surname": 2},
        {"surname": 5}
      ]
  }
];
const arrayOfElements2 = [
  {
    "name": "a",
    "subElements":
      [
        [{"surname": 1}, {"surname": 8}],
        [{"surname": 2}, {"surname": 9}]
      ]
  },
  {
    "name": "b",
    "subElements":
      [
        [{"surname": 3}, {"surname": 10}],
        [{"surname": 1}, {"surname": 11}]
      ]
  },
  {
    "name": "c",
    "subElements":
      [
        [{"surname": 2}, {"surname": 12}],
        [{"surname": 5}, {"surname": 13}]
      ]
  }
];

function addNombre() {
  return arrayOfElements.map(el => {
    const newEl = { ...el };

    newEl.nombre = el.name;
    delete newEl.name;
    return newEl
  })
}

function nameAorB() {
  const aux = [];

  arrayOfElements.forEach(el => {
    (el.name === 'a' || el.name === 'b') && aux.push(el)
  })

  return aux;
}

function surname1() {
  const aux = [];

  arrayOfElements.forEach(el => {
    el.subElements.forEach(subEl => {
      subEl.surname === 1 && aux.push(el)
    })
  })

  return aux;
}

function surname1Map() {
  return arrayOfElements.map(el => {
    el.subElements = el.subElements.map(subEl => {
      if(subEl.surname === 1) {
        return subEl;
      }
    })

    return el;
  })
}

function nameAndSurname1(algo = 1) {
  return arrayOfElements.map(el => {
    // el.subElements.pop() // quitar el ultimo elemento

    const aux = [];
    el.subElements.forEach((subEl, i) => {
      if(i < algo) {
        aux.push(subEl);
      }
    })
    el.subElements = aux;
    return el;
  })
}

function joinArray() {
  const newArr = [ ...arrayOfElements ].reverse();

  return arrayOfElements.concat(newArr);
}

function useFind(name = 'a') {
  return arrayOfElements.find(el => el.name === name)
}

function useFill() {
  return arrayOfElements.fill(useFind(), 0, arrayOfElements.length - 1)
}

function useFilter() {
  return arrayOfElements.map(el => (
    {
      ...el,
      subElements: el.subElements.filter(subElement => subElement.surname === 1)
    }
  )).filter(el => el.subElements.length > 0);
}

function deepFilter() {
  return arrayOfElements2.map(element => (
    {
      name: element.name,
      subElements: element.subElements.map(subElementArray => {
        return subElementArray.filter(surnameObject => surnameObject.surname === 11)
      }).filter(subElementArray => subElementArray.length)
    }
  )).filter(element => element.subElements.length)
}

function deepSelector() {
  const aux = [];

  arrayOfElements2.forEach(element => {
    element.subElements.forEach(subElement => {
      subElement.forEach(surnameObject => {
        if (surnameObject.surname === 11 || surnameObject.surname === 8) {
          aux.push(element);
        }
      })
    })
  })

  return aux;
}

function useFindDeep() {
  return arrayOfElements2.find(el => (
    el.subElements.find(subEl => (
      subEl.find(surnameObject =>  surnameObject.surname === 11 )
    ))
  ))
}

export default function hoFunctions() {
  return useFindDeep();
}
