import {Inform} from './data';

export const MOCK: Inform[] = [ //What's your ****ing problem?!
  {sys: 'Vista',
  msg: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Cosby sweater eu tellus ac cursus commodo, tortor mauris nibh. Vivamus sagittis lacus vel augue nisi erat porttitor ligula posuere erat a dapibus, tellus ac cursus.",
  prc: 'Vivamus porta sem malesuada magna mollis lacus vel sagittis augue laoreet dolor auctor.',
  trc: 'For sem malesuada magna, vehicula ut id elit.',
  env: 'TESTENV',
  CD: {day: 12, month: 7, year: 2019},
  PD: {day: 12, month: 7, year: 2019},
  ID: 4,
  err: 'N',
  },
  {sys: 'Nova',
  msg: "long witty coment to act as a placeholder so I can try to debug this stupid thing. Apparently the formatting looks wonky unless I make this one even longer, so more random typing it is. I don't actually know what to put here, this is just filler after all... Ok, this is long enough to make the formatting behave itself, so that's good. I should probably stop now. Ok, actually stoping in 3, 2, 1",
  prc: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non quam venenatis vestibulum.',
  trc: 'Commencing Keyboard smash in 5... 4...',
  env: 'NPTOTHER',
  CD: {day: 9, month: 7, year: 2019},
  PD: {day: 9, month: 7, year: 2019},
  ID: 3,
  err: 'N',
  eT: {
    code: 'INFO',
    desc: 'Informational'
    }
  },

  {sys: 'Nova',
  msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh. Nullam id dolor id nibh ultricies vehicula ut id elit. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
  prc: 'Etiam porta sem malesuada magna mollis euismod.',
  trc: '3... 2... 1...',
  env: 'NPTES520',
  CD: {day: 5, month: 7, year: 2019},
  PD: {day: 6, month: 7, year: 2019},
  ID: 2,
  err: 'Y',
  eT: {
    code: 'NOVA_ERROR',
    desc: 'Nova Errors',
    email: 'name@email.com'
    }
  },

  {sys: 'Online Application',
  msg: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
  prc: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  trc: "asklajoif gjneircv hgpds hgviud jhsirea kehjrfiuehrs bgfidrghiug shfidrs buisf hfviuyrg hsgbuifa kalfg hid",
  env: 'NPTES520',
  CD: {day: 5, month: 7, year: 2019},
  PD: {day: 5, month: 7, year: 2019},
  ID: 1,
  err: 'N',
  eT: {
    code: 'NOVA_NOTI',
    desc: 'Nova Notification'
    }
  }
]