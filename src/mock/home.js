import Mock from 'mockjs'

Mock.mock('http://localhost:3000/getUserInfo', {
    data: {
        Name: 'kenny',
        Age: 18
    }
})