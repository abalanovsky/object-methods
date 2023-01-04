function isEmpty(obj) {
    if (Object.getOwnPropertyNames(obj).length > 0) {
        console.log('object is full of properties')
    } else {
        console.log('object is empty')
    }
}

function hireNewEmployee(obj) {
    lieToEmployer()
    const reasons = []
    if (obj.age < 25) {
        reasons.push(' younger than 25')
    }
    if (obj.education !== 'high') {
        reasons.push(' low education level')
    }
    if (obj.experience < 2) {
        reasons.push(' not enough experience')
    }
    return reasons.length === 0 ? "You're Hired! Congrats!" :
        `Not hired: sorry we cannot hire you. Here is why:${reasons}`
}

const employee = {}
Object.defineProperty(employee, 'age', {
    value: 27,
})
Object.defineProperty(employee, 'education', {
    value: 'secondary',
    writable: true
})
Object.defineProperty(employee, 'experience', {
    value: 1,
})

function lieToEmployer(){
    employee.education = 'high'
    employee.education === 'high' ? console.log('edu: Lied successfully') : console.log('edu: Unsuccessful lie')
    employee.experience = 5
    employee.experience === 5 ? console.log('exp: Lied successfully') : console.log('exp: Unsuccessful lie')
}

console.log(hireNewEmployee(employee))
