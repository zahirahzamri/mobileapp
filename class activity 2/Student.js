class Student{
    constructor(name, matricno, major){
        this.name = name;
        this.matricno = matricno;
        this.major = major;
    }
    
    get Name(){
        return this.name;
    }
    set Name(name){
        this.name = name;
    }

    get Matricno(){
        return this.matricno;
    }
    set Matricno(matricno){
        this.matricno = matricno;
    }

    get Major(){
        return this.major;
    }
    set Major(major){
        this.major = major;
    }

    display = (name,matricno,major) => {
        console.log(`Student Name: ${name}`);
        console.log(`Matric Number: ${matricno}`);
        console.log(`Major: ${major}`);
    };
}
module.exports = {Student};

