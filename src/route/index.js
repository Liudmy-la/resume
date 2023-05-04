// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$600 per mounth',
  address:
    'Ukraine, Kuiv, Khreschatyk str., build. 22, 01001',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380980000321',
      href: 'tel:+380980000321',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
}),
  // ================================================================
  router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
      // ↙ сюди вводимо JSON дані
      page: {
        title: 'Resume | Skills',
      },
      header,
      main: {
        skills: [
          {
            name: 'HTML',
            point: 10,
            isTop: true,
          },
          {
            name: 'Handlebars',
            point: 10,
            isTop: true,
          },
          {
            name: 'VS Code',
            point: 8,
            isTop: false,
          },
          {
            name: 'Git',
            point: 8,
          },
          {
            name: 'Terminal',
            point: 8,
          },
          {
            name: 'NPM',
            point: 8,
          },
          {
            name: 'React.js',
            point: 0,
          },
          {
            name: 'PHP',
            point: null,
          },
        ],
        hobbies: [
          {
            name: 'Reading',
            isMain: true,
          },
          {
            name: 'Walking',
            isMain: true,
          },
          {
            name: 'Doing arts',
            isMain: false,
          },
          {
            name: 'Tasting dishes',
            isMain: false,
          },
        ],
      },
      footer,
    })
  })

// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'School First',
          isEnd: true,
        },
        {
          name: 'School Second',
          isEnd: true,
        },
        {
          name: 'School Third',
          isEnd: true,
        },
        {
          name: 'School Fouth',
          isEnd: false,
        },
        {
          name: 'School Fifth',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'FirstCertif',
          id: 001,
        },
        {
          name: 'SecondCertif',
          id: 002,
        },
        {
          name: 'ThirdCertif',
          id: 003,
        },
        {
          name: 'FourthCertif',
          id: 004,
        },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Developer',
          company: {
            name: 'IT First',
            url: null,
          },
          duration: {
            from: '06.03.23',
            to: '05.10.23',
          },
          projectAmount: '1',
        },
        {
          position: 'Junior Fullstack JS Developer',
          company: {
            name: 'IT Brains',
            url: 'http://it-brains.com.ua/',
          },
          duration: {
            from: '06.10.23',
            to: null,
          },
          projectAmount: '3',
          projects: [
            {
              name: 'Resume',
              url: 'http://it-brains.com.ua/',
              about:
                'One of the most important things to decide when creating a mobile app is how many features to include. While there is no set number of features per app, it is a careful balance between functionality and usability.',
              stacksAmount: 3,
              stacks: [
                { name: 'React.js' },
                { name: 'Html / CSS' },
                { name: 'Node.js' },
              ],
              awardsAmount: 2,
              awards: [
                {
                  name: 'The right balance equals an app users want to keep coming back to.',
                },
                {
                  name: 'With careful planning, it is not hard to decide on the right features for the app.',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
