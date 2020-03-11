var students = require('./Student.js');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name:', (name) => {
    rl.question('Enter your matric number:', (matricno) => {
        rl.question('Enter your major:', (major) => {
            
            let stud = new students.Student(name,matricno,major);

            stud.name = 'name';
            stud.matricno = 'matricno';
            stud.major= 'major';

            stud.display(name,matricno,major);
            rl.close();
        });        
    });
});