MockData = [
  {
    "SourceSystem": "Unicenter",
    "LogNumber": 0,
    "Message": "So the filter is no longer case-sensitive, which I personally think is a good thing.",
    "ProcessName": "copy-pasting some code to change the strings used in the filtering process so that they're all uppercase",
    "TraceInfo": "idunno",
    "EnvironmentInfo": "Somewhere on a computer, obviously",
    "StartDate": "2019-08-08T12:50:27",
    "EndDate": "2019-08-08T12:50:27",
    "err": false,
    "ID": 0,
    "eT": {
      "code": "UNICTR_OK",
      "desc": "Unicenter",
      "email": "ekline@thedoctors.com",
      "pager": ""
    },
    "UserName": "EKline"
  },
  {
    SourceSystem: "Report Server",
    LogNumber: 3,
    Message: "Look, I'm just putting in different systems and messages and whatnot so I can test the different filters.",
    ProcessName: "",
    TraceInfo: "",
    EnvironmentInfo: "REPORT_SERVER_C",
    StartDate: new Date('2019-08-07T12:54:41'),
    EndDate: new Date('2019-08-07T12:54:41'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Unicenter",
    LogNumber: 2,
    Message: "",
    ProcessName: "Look, I'm just putting in different systems and messages and whatnot so I can test the different filters.",
    TraceInfo: "Look, I'm just putting in different systems and messages and whatnot so I can test the different filters.",
    EnvironmentInfo: "UNICTR",
    StartDate: new Date('2019-08-07T12:50:27'),
    EndDate: new Date('2019-08-07T12:50:27'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Report Server",
    LogNumber: 1,
    Message: "Look, I'm just putting in different systems and messages and whatnot so I can test the different filters.",
    ProcessName: "saying 'never looking at this thing again' before was apparently a big fat lie.",
    TraceInfo: "",
    EnvironmentInfo: "REPORT_SERVER_B",
    StartDate: new Date('2019-08-06T12:54:41'),
    EndDate: new Date('2019-08-06T12:54:41'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Report Server",
    LogNumber: 1,
    Message: "Reminder: set up an auto-reload system somehow",
    ProcessName: "Coding, obviously. What else would I use to make it work?",
    TraceInfo: "I'm still not sure what exactly 'Trace' is supposed to refer to :/",
    EnvironmentInfo: "REPORT_SERVER_C",
    StartDate: new Date('2019-07-29T12:21:09'),
    EndDate: new Date('2019-07-29T12:21:09'),
    err: false,
    ID: 0,
    eT: {
      code: "INFO",
      desc: "Informational",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Report Server",
    LogNumber: 0,
    Message: "Reminder: set up an auto-reload system somehow",
    ProcessName: "Coding, obviously. What else would I use to make it work?",
    TraceInfo: "I'm still not sure what exactly 'Trace' is supposed to refer to :/",
    EnvironmentInfo: "REPORT_SERVER_A",
    StartDate: new Date('2019-07-28T12:54:41'),
    EndDate: new Date('2019-07-28T12:54:41'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "DBA",
    LogNumber: 4,
    Message: "It works. Thank whatever higher power fixed this mess.",
    ProcessName: "never looking at this thing again.",
    TraceInfo: "",
    EnvironmentInfo: "Test_ENV_3",
    StartDate: new Date('2019-07-25T12:35:20'),
    EndDate: new Date('2019-07-25T12:35:20'),
    err: false,
    ID: 0,
    eT: {
      code: "DBA_MSG",
      desc: "DBA Message",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: "the IT intern"
  },
  {
    SourceSystem: "DBA",
    LogNumber: 3,
    Message: "WHY DO YOU KEEP BREAKING THE TEST ENVIRONMENTS?!",
    ProcessName: "Screaming",
    TraceInfo: "Screaming",
    EnvironmentInfo: "Test_ENV_3",
    StartDate: new Date('2019-07-22T12:35:20'),
    EndDate: new Date('2019-07-22T12:35:20'),
    err: true,
    ID: 0,
    eT: {
      code: "DBA_ERROR",
      desc: "DBA Error",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: "the IT intern"
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 2,
    Message: "Something went wrong again. Still don't know what happened",
    ProcessName: "",
    TraceInfo: "Idk",
    EnvironmentInfo: "Test_ENV_2",
    StartDate: new Date('2019-07-21T12:35:20'),
    EndDate: new Date('2019-07-21T12:35:20'),
    err: true,
    ID: 0,
    eT: {
      code: "UNKNOWN",
      desc: "Unknown",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: "the IT intern"
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 1,
    Message: "Something went wrong somewhere. Heck if I know what happened",
    ProcessName: "",
    TraceInfo: "Idk",
    EnvironmentInfo: "Test_ENV_1",
    StartDate: new Date('2019-07-21T12:30:00'),
    EndDate: new Date('2019-07-21T12:30:00'),
    err: true,
    ID: 0,
    eT: {
      code: "UNKNOWN",
      desc: "Unknown",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: "the IT intern"
  },
  {
    SourceSystem: "Star",
    LogNumber: 6,
    Message: "Resending this for testing purposes: This is taking too long. Blegh. I will face god and walk backwards into hell.",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "",
    EnvironmentInfo: "Dev System 2",
    StartDate: new Date('2019-07-07T08:00:23'),
    EndDate: new Date('2019-07-07T08:00:23'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Star",
    LogNumber: 5,
    Message: "This is taking too long. Blegh. I will face god and walk backwards into hell.",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 1",
    StartDate: new Date('2019-07-07T08:00:23'),
    EndDate: new Date('2019-07-07T08:00:23'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Star",
    LogNumber: 4,
    Message: "This is taking too long. Blegh. I will face god and walk backwards into hell.",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 1",
    StartDate: new Date('2019-07-05T01:00:00'),
    EndDate: new Date('2019-07-05T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 1,
    Message: "",
    ProcessName: "",
    TraceInfo: "",
    EnvironmentInfo: "Server",
    StartDate: new Date('2019-06-21T04:30:00'),
    EndDate: new Date('2019-06-21T04:30:00'),
    err: true,
    ID: 0,
    eT: {
      code: "UNKNOWN",
      desc: "Unknown",
      email: "",
      pager: ""
    },
    UserName: "HAL jr."
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 1,
    Message: "",
    ProcessName: "wake",
    TraceInfo: ":P",
    EnvironmentInfo: "Test_ENV",
    StartDate: new Date('2019-06-17T04:30:00'),
    EndDate: new Date('2019-06-17T04:30:00'),
    err: false,
    ID: 0,
    eT: {
      code: "66000",
      desc: "Hal Email Sleep Stop/Start",
      email: "",
      pager: ""
    },
    UserName: "HAL jr."
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 0,
    Message: "",
    ProcessName: "sleep",
    TraceInfo: "sigh",
    EnvironmentInfo: "Test_ENV",
    StartDate: new Date('2019-06-16T23:06:00'),
    EndDate: new Date('2019-06-16T23:06:00'),
    err: false,
    ID: 0,
    eT: {
      code: "66000",
      desc: "Hal Email Sleep Stop/Start",
      email: "",
      pager: ""
    },
    UserName: "HAL jr."
  },
  {
    SourceSystem: "Nova",
    LogNumber: 1,
    Message: "more tests",
    ProcessName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    TraceInfo: "look, at this point I just need filler.",
    EnvironmentInfo: "Company Computer",
    StartDate: new Date('2019-05-27T01:00:00'),
    EndDate: new Date('2019-05-27T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "NOVA_NOTI",
      desc: "Nova Notification",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Nova",
    LogNumber: 4,
    Message: "more tests",
    ProcessName: "",
    TraceInfo: "look, at this point I just need filler.",
    EnvironmentInfo: "Company Computer",
    StartDate: new Date('2019-05-27T01:00:09'),
    EndDate: new Date('2019-05-27T01:00:09'),
    err: false,
    ID: 0,
    eT: {
      code: "NOVA_NOTI",
      desc: "Nova Notification",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Nova",
    LogNumber: 3,
    Message: "test",
    ProcessName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    TraceInfo: "",
    EnvironmentInfo: "Company Computer",
    StartDate: new Date('2019-05-27T01:00:07'),
    EndDate: new Date('2019-05-27T01:00:07'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Nova",
    LogNumber: 2,
    Message: "test",
    ProcessName: "hhhhhhhnnnnnnnngggggggggggggggggggggggggggggg",
    TraceInfo: "look, at this point I just need filler.",
    EnvironmentInfo: "Company Computer",
    StartDate: new Date('2019-05-27T01:00:05'),
    EndDate: new Date('2019-05-27T01:00:05'),
    err: false,
    ID: 0,
    eT: {
      code: "NOVA_NOTI",
      desc: "Nova Notification",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Nova",
    LogNumber: 1,
    Message: "hhhhhhhnnnnnnnngggggggggggggggggggggggggggggg",
    ProcessName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    TraceInfo: "look, at this point I just need filler.",
    EnvironmentInfo: "Test_ENV_1",
    StartDate: new Date('2019-05-27T01:00:00'),
    EndDate: new Date('2019-05-27T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "NOVA_NOTI",
      desc: "Nova Notification",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "DWS",
    LogNumber: 0,
    Message: "test",
    ProcessName: "",
    TraceInfo: "",
    EnvironmentInfo: "DW Sys",
    StartDate: new Date('2019-05-21T01:00:00'),
    EndDate: new Date('2019-05-21T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "DWS",
    LogNumber: 0,
    Message: "test",
    ProcessName: "",
    TraceInfo: "",
    EnvironmentInfo: "DW Sys",
    StartDate: new Date('2019-05-21T01:00:00'),
    EndDate: new Date('2019-05-21T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "DWS",
    LogNumber: 0,
    Message: "test",
    ProcessName: "",
    TraceInfo: "",
    EnvironmentInfo: "DW Sys",
    StartDate: new Date('2019-05-16T01:00:00'),
    EndDate: new Date('2019-05-16T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "DWS",
    LogNumber: 0,
    Message: "test",
    ProcessName: "",
    TraceInfo: "",
    EnvironmentInfo: "DW Sys",
    StartDate: new Date('2019-05-15T01:00:00'),
    EndDate: new Date('2019-05-15T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Nova",
    LogNumber: 0,
    Message: "",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 3",
    StartDate: new Date('2019-05-21T01:00:00'),
    EndDate: new Date('2019-05-21T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "NOVA_NOTI",
      desc: "Nova Notification",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Nova",
    LogNumber: 0,
    Message: "",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 3",
    StartDate: new Date('2019-05-15T01:00:00'),
    EndDate: new Date('2019-05-15T01:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "NOVA_NOTI",
      desc: "Nova Notification",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Nova",
    LogNumber: 0,
    Message: "",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 3",
    StartDate: new Date('2019-04-13T00:00:00'),
    EndDate: new Date('2019-04-13T00:00:00'),
    err: true,
    ID: 0,
    eT: {
      code: "NOVA_ERROR",
      desc: "Nova Error",
      email: "",
      pager: ""
    },
    UserName: "emily"
  },
  {
    SourceSystem: "Nova",
    LogNumber: 1,
    Message: "This is another test.",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 3",
    StartDate: new Date('2019-04-13T00:00:00'),
    EndDate: new Date('2019-04-13T00:00:00'),
    err: true,
    ID: 0,
    eT: {
      code: "NOVA_ERROR",
      desc: "Nova Error",
      email: "",
      pager: ""
    },
    UserName: "emily"
  },
  {
    SourceSystem: "Nova",
    LogNumber: 101,
    Message: "This is another test.",
    ProcessName: "Adding in the dates for all these items is definitely the worst part about this whole thing.",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 3",
    StartDate: new Date('2019-04-13T00:00:00'),
    EndDate: new Date('2019-04-13T00:00:00'),
    err: true,
    ID: 0,
    eT: {
      code: "NOVA_ERROR",
      desc: "Nova Error",
      email: "",
      pager: ""
    },
    UserName: "emily"
  },
  {
    SourceSystem: "Nova",
    LogNumber: 100,
    Message: "This is another test.",
    ProcessName: "keysmashes are big moods (Trademarked), you know?",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 3",
    StartDate: new Date('2018-10-25T00:00:00'),
    EndDate: new Date('2018-10-25T00:00:00'),
    err: true,
    ID: 0,
    eT: {
      code: "NOVA_ERROR",
      desc: "Nova Error",
      email: "",
      pager: ""
    },
    UserName: "emily"
  },
  {
    SourceSystem: "Nova",
    LogNumber: 0,
    Message: "This is another test.",
    ProcessName: "",
    TraceInfo: "I will face god and walk backwards into hell",
    EnvironmentInfo: "Dev System 2",
    StartDate: new Date('2018-06-12T00:00:00'),
    EndDate: new Date('2018-06-12T00:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "UNDEFINED",
      desc: "Undefined",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: "me"
  },
  {
    SourceSystem: "Vista",
    LogNumber: 0,
    Message: "Happy New Years, my good dudes",
    ProcessName: "",
    TraceInfo: "",
    EnvironmentInfo: "Dev System",
    StartDate: new Date('2017-01-01T00:00:00'),
    EndDate: new Date('2017-01-01T00:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: "me"
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 0,
    Message: "This is another test.",
    ProcessName: "I Do Not Know, Truthfully",
    TraceInfo: "",
    EnvironmentInfo: "Dev System",
    StartDate: new Date('2014-04-13T03:10:25'),
    EndDate: new Date('2014-04-13T03:10:25'),
    err: false,
    ID: 0,
    eT: {
      code: "UNDEFINED",
      desc: "Undefined",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: "me"
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 0,
    Message: "This is another test.",
    ProcessName: "I Do Not Know, Truthfully",
    TraceInfo: "",
    EnvironmentInfo: "Dev System",
    StartDate: new Date('2012-04-13T03:10:25'),
    EndDate: new Date('2012-04-13T03:10:25'),
    err: false,
    ID: 0,
    eT: {
      code: "UNDEFINED",
      desc: "Undefined",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Vista",
    LogNumber: 3,
    Message: "I Am Honestly Running Out Of Ideas On How To Test This Thing. Maybe I Should Just Copy And Paste Some More Items Into The Mock-Data File. Or Something Similar. I Can't Say I Know For Sure What To Do.",
    ProcessName: "I Do Not Know, Truthfully",
    TraceInfo: "",
    EnvironmentInfo: "Dev System",
    StartDate: new Date('2012-04-13T03:00:00'),
    EndDate: new Date('2012-04-13T03:00:00'),
    err: false,
    ID: 0,
    eT: {
      code: "",
      desc: "",
      email: "",
      pager: ""
    },
    UserName: ""
  },
  {
    SourceSystem: "Star",
    LogNumber: 2,
    Message: "I Am Honestly Running Out Of Ideas On How To Test This Thing. Maybe I Should Just Copy And Paste Some More Items Into The Mock-Data File. Or Something Similar. I Can't Say I Know For Sure What To Do.",
    ProcessName: "I Do Not Know, Truthfully",
    TraceInfo: "Hm. I Am Not Sure. Perhaps I Should Leave This Blank?",
    EnvironmentInfo: "Dev System",
    StartDate: new Date('December 30, 2010 05:22:06'),
    EndDate: new Date('December 30, 2010 05:22:06'),
    err: true,
    ID: 0,
    eT: {
      code: "UNDEFINED",
      desc: "Undefined",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: "K. M."
  },
  {
    SourceSystem: "Unknown",
    LogNumber: 1,
    Message: "I Am Honestly Running Out Of Ideas On How To Test This Thing. Maybe I Should Just Copy And Paste Some More Items Into The Mock-Data File. Or Something Similar. I Can't Say I Know For Sure What To Do.",
    ProcessName: "I Do Not Know, Truthfully",
    TraceInfo: "",
    EnvironmentInfo: "Dev System",
    StartDate: new Date('December 17, 2010 03:24:00'),
    EndDate: new Date('December 17, 2010 03:24:00'),
    err: true,
    ID: 0,
    eT: {
      code: "UNDEFINED",
      desc: "Undefined",
      email: "firstname.lastname@thedoctors.com",
      pager: ""
    },
    UserName: ""
  }
]