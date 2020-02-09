const devs = [
    { name: 'Arlen', age: 25, techs: ['reactjs', 'nodejs', 'vuejs'] },
    { name: 'Joao', age: 23, techs: ['java', 'nodejs', 'kotlin'] },
    { name: 'Carlos', age: 12, techs: ['java', 'postgres', 'kotlin'] },
    { name: 'Ana', age: 13, techs: ['sql', 'python', 'go'] },
    { name: 'Maria', age: 18, techs: ['java', 'php', 'kotlin'] }
];

const ages = devs.map(dev => {
    return dev.age;
});

console.log('Map', ages);

const devsJava = devs.filter((dev) => {
    return dev.techs.indexOf('java') > -1;
});

console.log('Filter', devsJava);

const devsTotalAge = devs.reduce((actualValue, dev) => {
    return dev.age + actualValue
}, 0); //0 é o valor inicial que o reduce irá trabalhar

console.log('Reduce', devsTotalAge);