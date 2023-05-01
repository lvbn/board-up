// import { }  from "./../../images/daftpunk.jpg"

// TNT Mongo ID = 644425d7749046fa1d46132f
// cyberpunk Mongo ID = 64442619749046fa1d461331

const USERS = [
  {
    firstname: "Napoleon Andrew",
    lastname: "",
    username: "TNT",
    email: "tnt@dynamite.tnt",
    status: "I'm Dynamite",
    mygames: [
      { name: "monopoly", "level": "expert" },
      { name: "risk", "level": "beginner" },
      { name: "monopoly", "level": "advanced" }
    ],
    myBUs: ["6443b4521ca9ef9394561133", "6443b3161ca9ef9394561131"],
    hostingBoardups: ["123456789", "7564566"],
    attendingBoardups: ["71254566", "75674866"],
    photo: "https://pbs.twimg.com/profile_images/976941155370795014/ZzdOhH9C_400x400.jpg"
    },
    {
      firstname: "Cy",
      lastname: "Borg",
      username: "cyberpunk",
      email: "cy@borg.cy",
      status: "Human After All",
      mygames: [
        { name: "arc", "level": "expert" },
        { name: "chess", "level": "beginner" },
        { name: "uno", "level": "advanced" }
      ],
      myBUs: ["6443b5091ca9ef9394561136", "6443b4521ca9ef9394561133"],
      photo: "https://www.nme.com/wp-content/uploads/2016/09/2013DaftPunkFacebook1260213-1-1.jpg"

    },
  ]

  const BOARDUPS = [
    {
      _id: '123456789',
      title: 'TESTING BOARDUP I',
      host: [
        {
          _id: '8762645',
          username: 'Federico'
        }
      ],
      game: [{
        _id: '123',
        name: 'Monopoly'
      }],
      level: 'medium',
      numberOfPlayers: 5,
      location: 'online',
      datetime: '01/02/2003',
      details: '',
      playersAttending: [
        {
          _id: '564356',
          username: 'Luiz'
        },
        {
          _id: '8767545',
          username: 'Seb'
        },
        ,
        {
          _id: '4355667',
          username: 'Tekraj'
        }
      ]
    },
    {
      _id: '7564566',
      title: 'TESTING BOARDUP II',
      host: [
        {
          _id: '8762645',
          username: 'Federico'
        }
      ],
      game: [{
        _id: '123',
        name: 'Monopoly'
      }],
      level: 'medium',
      numberOfPlayers: 5,
      location: 'online',
      datetime: '01/02/2003',
      details: '',
      playersAttending: [
        {
          _id: '564356',
          username: 'Luiz'
        },
        {
          _id: '8767545',
          username: 'Seb'
        },
        ,
        {
          _id: '4355667',
          username: 'Tekraj'
        }
      ]
    },
    {
      _id: '75674866',
      title: 'TESTING BOARDUP III',
      host: [
        {
          _id: '8762645',
          username: 'Federico'
        }
      ],
      game: [{
        _id: '123',
        name: 'Monopoly'
      }],
      level: 'medium',
      numberOfPlayers: 5,
      location: 'online',
      datetime: '01/02/2003',
      details: '',
      playersAttending: [
        {
          _id: '564356',
          username: 'Luiz'
        },
        {
          _id: '8767545',
          username: 'Seb'
        },
        ,
        {
          _id: '4355667',
          username: 'Tekraj'
        }
      ]
    },
    {
      _id: '71254566',
      title: 'TESTING BOARDUP IV',
      host: [
        {
          _id: '8762645',
          username: 'Federico'
        }
      ],
      game: [{
        _id: '123',
        name: 'Monopoly'
      }],
      level: 'medium',
      numberOfPlayers: 5,
      location: 'online',
      datetime: '01/02/2003',
      details: '',
      playersAttending: [
        {
          _id: '564356',
          username: 'Luiz'
        },
        {
          _id: '8767545',
          username: 'Seb'
        },
        ,
        {
          _id: '4355667',
          username: 'Tekraj'
        }
      ]
    }
  ]

  module.exports = { USERS, BOARDUPS }