define({ "api": [
  {
    "type": "get",
    "url": "host/account/create",
    "title": "Create",
    "name": "CreateAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>Role id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/account/create?data={\n  \"account\": \"abc123\",\n  \"password\": \"abc123\",\n  \"name\": \"JessieChen\",\n  \"roleId\": \"57c6ac272eac5acc7fd314c8\",\n  \"email\": \"JessieChen@gmail.com\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/6_account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "host/account/delete",
    "title": "Delete",
    "name": "DeleteAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Account id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/account/delete?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/6_account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "host/account/login",
    "title": "Login",
    "name": "Login",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/account/login?data={\n  \"account\": \"abc123\",\n  \"password\":\"abc123\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": {\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"name\": \"JessieChen\",\n     \"email\": \"JessieChen@gmail.com\",\n     \"role\": {\n         \"roleId\":\"67c8ac252eac5acc7fd356c4\",\n         \"roleName\":\"admin\",\n         \"roleBody\":{\n           \"locationList\":\"1\",\n           \"groupSetting\":\"1\",\n           \"addNewLocation\":\"1\",\n           \"addNewGateways\":\"1\",\n           \"addNewDevice\":\"1\",\n           \"accountList\":\"1\",\n           \"createNewAccount\":\"1\",\n           \"changeMyPassword\":\"1\",\n           \"roleOfRightsManagement\":\"1\",\n           \"deviceRepair\":\"1\",\n           \"deviceRepairList\":\"1\",\n           \"appErrorLog\":\"1\",\n           \"logingLog\":\"1\",\n           \"about\":\"1\",\n           \"chart\":\"1\",\n           \"report\":\"1\",\n           \"ruleList\":\"1\",\n           \"addNewRule\":\"1\"\n         }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/6_account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "host/account/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/account/logout?data={\n  \"account\": \"abc123\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/6_account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "host/account/query",
    "title": "Query all",
    "name": "QueryAllAccount",
    "group": "Account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/account/query",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": [{\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"account\":\"abc123\",\n     \"name\": \"JessieChen\",\n     \"email\": \"JessieChen@gmail.com\",\n     \"roleId\":\"g7c6ac272eac5acfd314c56\"\n }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/6_account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "host/account/password",
    "title": "Change password",
    "name": "UpdateAccountPassword",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Account id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentPassword",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/account/password?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n  \"currentPassword\": \"abc123\",\n  \"newPassword\": \"ujskowfj\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/6_account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "host/account/profile",
    "title": "Update profile",
    "name": "UpdateAccountProfile",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Account id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>Role id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/account/profile?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n  \"name\": \"JessieChen\",\n  \"roleId\": \"57c6ac272eac5acc7fd314c8\",\n  \"email\": \"JessieChen@gmail.com\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/6_account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "host/chart/query_device",
    "title": "Query By Device",
    "name": "QueryChartByDevice",
    "group": "Chart_Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>Device id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>temperature, humidity, rfid....</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>yyyy/mm/dd hh:mm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>yyyy/mm/dd hh:mm</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/chart/query_device?data={\n  \"deviceId\": \"57c6ac272eac5acc7fd314c8\",\n  \"type\": \"temperature\",\n  \"startTime\": \"2016/7/7 00:00\",\n  \"endTime\": \"2016/7/8 00:00\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response-Chart:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": [{\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"date\": \"2016/7/7 13:00\",\n     \"action\": \"Login\",\n     \"account\":  {\n          \"accountId\":\"67c8ac252eac5acc7fd356c4\",\n          \"name\":\"JessieChen\"\n       }\n   }]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response-Report:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": [{\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"date\": \"2016/7/7 13:00\",\n     \"action\": \"Login\",\n     \"account\":  {\n          \"accountId\":\"67c8ac252eac5acc7fd356c4\",\n          \"name\":\"JessieChen\"\n       }\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/8_chart.js",
    "groupTitle": "Chart_Report"
  },
  {
    "type": "get",
    "url": "host/device/create",
    "title": "Create",
    "name": "CreateDevice",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JsonString-Array",
            "optional": false,
            "field": "data",
            "description": "<p>接受多筆.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sn",
            "description": "<p>Serial number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bundleName",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/device/create?data=[{\n  \"sn\": \"4FDFS51F9WEF8EWEF7\",\n  \"deviceName\": \"light 1\",\n  \"bundleName\": \"light_9F622005004B1200-1.0\"\n}]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/3_device.js",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "host/device/delete",
    "title": "Delete",
    "name": "DeleteDevice",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Device id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/device/delete?data={\n  \"_id\": \"97c6ac272eac5acc7fd314c1\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/3_device.js",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "host/device/query_locngw",
    "title": "Query by gateway AND room",
    "name": "QueryDeviceLocAndGw",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gatewayId",
            "description": "<p>Gateway id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/gateway/query_locngw?data={\n  \"gatewayId\":\"57c8ac252eac5acc7fd35655\",\n  \"roomId\":\"57c8ac252eac5acc7fd35655\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"return_code\": \"0\",\n  \"return_result\": [{\n    \"deviceName\": \"light 1\",\n    \"status\": \"On line\",\n    \"bundleName\": \"light_9F622005004B1200-1.0\",\n    \"pollingTime\":\"20\",\n    \"location\":[{\n                  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n                  \"locationName\": \"location 1\",\n                  \"description\": \"A big houese\",\n                  \"capacities\": \"Less then 5\",\n                  \"group\": [{\n                               \"_id\":\"67c8ac252eac5acc7fd356c4\",\n                               \"groupName\":\"6F\"\n                            },\n                            {\n                               \"_id\":\"57c8ac252eac5acc7fd35655\",\n                               \"groupName\":\"5F\"\t\n                            }],\n                  \"deviceTag\": [{\n                               \"_id\":\"67c8ac252eac5acc7fd356c4\",\n                               \"deviceTag\":\"TV\"\n                            },\n                            {\n                               \"_id\":\"57c8ac252eac5acc7fd35655\",\n                               \"deviceTag\":\"Air conditioning\"\t\n                            }]\n     }]\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/3_device.js",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "host/device/query_nogw",
    "title": "Query by no gateway",
    "name": "QueryDeviceNoGw",
    "group": "Device",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/gateway/query_nogw",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"return_code\": \"0\",\n  \"return_result\": [{\n    \"deviceName\": \"light 1\",\n    \"status\": \"On line\",\n    \"bundleName\": \"light_9F622005004B1200-1.0\",\n    \"pollingTime\":\"20\",\n    \"location\":[{\n                  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n                  \"locationName\": \"location 1\",\n                  \"description\": \"A big houese\",\n                  \"capacities\": \"Less then 5\",\n                  \"group\": [{\n                               \"_id\":\"67c8ac252eac5acc7fd356c4\",\n                               \"groupName\":\"6F\"\n                            },\n                            {\n                               \"_id\":\"57c8ac252eac5acc7fd35655\",\n                               \"groupName\":\"5F\"\t\n                            }],\n                  \"deviceTag\": [{\n                               \"_id\":\"67c8ac252eac5acc7fd356c4\",\n                               \"deviceTag\":\"TV\"\n                            },\n                            {\n                               \"_id\":\"57c8ac252eac5acc7fd35655\",\n                               \"deviceTag\":\"Air conditioning\"\t\n                            }]\n     }]\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/3_device.js",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "host/device/update",
    "title": "Update",
    "name": "UpdateDevice",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Device id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bundleName",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/device/update?data=[{\n  \"_id\":\"67c8ac252eac5acc7fd356c4\",\n  \"deviceName\": \"light 1\",\n  \"bundleName\": \"light_9F622005004B1200-1.0\"\n}]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/3_device.js",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "host/gateway/create",
    "title": "Create",
    "name": "CreateGateway",
    "group": "Gateway",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JsonString-Array",
            "optional": false,
            "field": "data",
            "description": "<p>接受多筆.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sn",
            "description": "<p>Serial number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gatewayName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "macAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "locationId",
            "description": "<p>location Id, 至少一個.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/gateway/create?data=[{\n  \"sn\": \"4FDFS51F9WEF8EWEF7\",\n  \"gatewayName\": \"gateway 1\",\n  \"ip\": \"127.0.0.1\",\n  \"macAddress\": \"00-90-27-10-60-53 \",\n  \"locationId\": [\"57c6ac272eac5acc7fd314c8\",\"97c6ac272eac5acc7fd314c1\"]\n}]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/2_gateway.js",
    "groupTitle": "Gateway"
  },
  {
    "type": "get",
    "url": "host/gateway/delete",
    "title": "Delete",
    "name": "DeleteGateway",
    "group": "Gateway",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Gateway id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/gateway/delete?data={\n  \"_id\": \"97c6ac272eac5acc7fd314c1\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/2_gateway.js",
    "groupTitle": "Gateway"
  },
  {
    "type": "get",
    "url": "host/gateway/query_locid",
    "title": "Query by location",
    "name": "QueryGatewayLocid",
    "group": "Gateway",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locationId",
            "description": "<p>location id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/gateway/query_locid?data={\n  \"locationId\": \"57c6ac272eac5acc7fd314c8\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"return_code\": \"0\",\n  \"return_result\": [\n   {\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"gatewayName\": \"Gateway 1\",\n     \"Status\": \"On line\",\n     \"location\": [\n       {\n          \"_id\":\"67c8ac252eac5acc7fd356c4\",\n          \"locationName\":\"location 1\"\n       },\n       {\n          \"_id\":\"57c8ac252eac5acc7fd35655\",\n          \"locationName\":\"location 2\"\t\n       }\n     ]\n   }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/2_gateway.js",
    "groupTitle": "Gateway"
  },
  {
    "type": "get",
    "url": "host/gateway/query_noloc",
    "title": "Query by no location",
    "name": "QueryGatewayNoLoc",
    "group": "Gateway",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/gateway/query_noloc",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"return_code\": \"0\",\n  \"return_result\": [\n   {\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"gatewayName\": \"Gateway 1\",\n     \"status\": \"On line\",\n     \"location\": []\n   }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/2_gateway.js",
    "groupTitle": "Gateway"
  },
  {
    "type": "get",
    "url": "host/gateway/update",
    "title": "Update",
    "name": "UpdateGateway",
    "group": "Gateway",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Gateway id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gatewayName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "macAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "locationId",
            "description": "<p>location Id, 至少一個.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/gateway/update?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n  \"gatewayName\": \"gateway 1\",\n  \"ip\": \"127.0.0.1\",\n  \"macAddress\": \"00-90-27-10-60-53 \",\n  \"locationId\": [\"57c6ac272eac5acc7fd314c8\",\"97c6ac272eac5acc7fd314c1\"]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/2_gateway.js",
    "groupTitle": "Gateway"
  },
  {
    "type": "get",
    "url": "host/location/create",
    "title": "Create",
    "name": "Createlocation",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locationName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capacities",
            "description": "<p>&quot;Less then 5&quot; || &quot;10 to 15&quot; || &quot;More then 15&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "locationTagId",
            "description": "<p>可不帶值.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/location/create?data={\n  \"locationName\": \"location 1\",\n  \"description\": \"A big houese\",\n  \"capacities\": \"Less then 5\",\n  \"groupId\": \"67c8ac252eac5acc7fd356c4\",\n  \"locationTagId\": [\"67c6ac272eac5acc7fd314c8\",\"87c6ac272eac5acc7fd314c8\"]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/1_location.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "host/location/delete",
    "title": "Delete",
    "name": "Deletelocation",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>location id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/location/delete?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"return_code\": \"0\",\n  \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/1_location.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "host/location/query",
    "title": "Query all",
    "name": "QueryAlllocation",
    "group": "Location",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/location/query",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": [\n   {\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"locationName\": \"location 1\",\n     \"description\": \"A big houese\",\n     \"capacities\": \"Less then 5\",\n     \"locationTag\": [\n       {\n          \"_id\":\"67c8ac252eac5acc7fd356c4\",\n          \"locationTagName\":\"TV\"\n       },\n       {\n          \"_id\":\"57c8ac252eac5acc7fd35655\",\n          \"locationTagName\":\"Air conditioning\"\t\n       }\n     ]\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/1_location.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "host/location/query_id",
    "title": "Query by id",
    "name": "QuerylocationById",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>location id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/location/query_id?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"return_code\": \"0\",\n  \"return_result\": [\n   {\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"locationName\": \"location 1\",\n     \"description\": \"A big houese\",\n     \"capacities\": \"Less then 5\",\n     \"locationTag\": [\n       {\n          \"_id\":\"67c8ac252eac5acc7fd356c4\",\n          \"locationTag\":\"TV\"\n       },\n       {\n          \"_id\":\"57c8ac252eac5acc7fd35655\",\n          \"locationTag\":\"Air conditioning\"\t\n       }\n     ]\n   }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/1_location.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "host/locationTag/create",
    "title": "Create",
    "name": "CreatelocationTag",
    "group": "LocationTag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locationTagName",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/locationTag/create?data={\n  \"locationTagName\": \"TV\",\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/4_locationTag.js",
    "groupTitle": "LocationTag"
  },
  {
    "type": "get",
    "url": "/location/update",
    "title": "Update",
    "name": "Updatelocation",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locationName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capacities",
            "description": "<p>&quot;Less then 5&quot; || &quot;10 to 15&quot; || &quot;More then 15&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "deviceTagId",
            "description": "<p>可不帶值.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/location/update?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n  \"locationName\": \"location 1\",\n  \"description\": \"A big houese\",\n  \"capacities\": \"Less then 5\",\n  \"groupId\": \"67c8ac252eac5acc7fd356c4\",\n  \"locationTagId\": [\"67c6ac272eac5acc7fd314c8\",\"87c6ac272eac5acc7fd314c8\"]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/1_location.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "host/log/query",
    "title": "Query all",
    "name": "QueryAllLog",
    "group": "Log",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/log/query",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": [{\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"date\": \"2016/7/7 13:00\",\n     \"action\": \"Login\",\n     \"account\":  {\n          \"accountId\":\"67c8ac252eac5acc7fd356c4\",\n          \"name\":\"JessieChen\"\n       }\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/12_log.js",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "host/log/query_time",
    "title": "Query by time",
    "name": "QueryLogByTime",
    "group": "Log",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>yyyy/mm/dd hh:mm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>yyyy/mm/dd hh:mm</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/log/query_time?data={\n  \"startTime\": \"2016/7/7 00:00\",\n  \"endTime\": \"2016/7/8 00:00\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": [{\n     \"_id\": \"57c6ac272eac5acc7fd314c8\",\n     \"date\": \"2016/7/7 13:00\",\n     \"action\": \"Login\",\n     \"account\":  {\n          \"accountId\":\"67c8ac252eac5acc7fd356c4\",\n          \"name\":\"JessieChen\"\n       }\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/12_log.js",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "host/repair/create",
    "title": "Create",
    "name": "CreateRepair",
    "group": "Repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locationId",
            "description": "<p>Location id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>Device id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "damageCauses",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/repair/create?data={\n  \"locationId\": \"57c6ac272eac5acc7fd314c8\",\n  \"deviceId\": \"d7c6ac56272eac5acc7fd3f1\",\n  \"damageCauses\": \"I don't know\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/11_deviceRepair.js",
    "groupTitle": "Repair"
  },
  {
    "type": "get",
    "url": "host/repair/query",
    "title": "Query",
    "name": "QueryAllRepair",
    "group": "Repair",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/repair/query",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"return_code\": \"0\",\n\t\"return_result\": [{\n\t\t\"_id\": \"d7c6ac56272eac5acc7fd3f1\",\n\t\t\"deviceName\": \"Light 1\",\n\t\t\"deviceSn\": \"4FDFS51F9WEF8EWEF7\",\n\t\t\"locationName\": \"Room 1\",\n\t\t\"reportDate\": \"2016/7/7 13:00\",\n\t\t\"repairState\": \"Revised\",\n\t\t\"revisedDate\": \"2016/7/9 13:24\",\n\t\t\"comments\":[{\n\t\t\t\t\"name\": \"JessieChen\",\n\t\t\t\t\"comment\": \" still broken !!!\",\n\t\t\t\t\"date\": \"2016/7/9 13:24\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\"name\": \"JessieChen\",\n\t\t\t\t\"comment\": \" still broken !!!\",\n\t\t\t\t\"date\": \"2016/7/10 13:24\"\t\n\t\t\t\t}]\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/11_deviceRepair.js",
    "groupTitle": "Repair"
  },
  {
    "type": "get",
    "url": "host/repair/query_time",
    "title": "Query by time",
    "name": "QueryRepairByTime",
    "group": "Repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>yyyy/mm/dd hh:mm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>yyyy/mm/dd hh:mm</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/repair/query_time?data={\n  \"startTime\": \"2016/7/7 00:00\",\n  \"endTime\": \"2016/7/8 00:00\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"return_code\": \"0\",\n\t\"return_result\": [{\n\t\t\"_id\": \"d7c6ac56272eac5acc7fd3f1\",\n\t\t\"deviceName\": \"Light 1\",\n\t\t\"deviceSn\": \"4FDFS51F9WEF8EWEF7\",\n\t\t\"locationName\": \"Room 1\",\n\t\t\"reportDate\": \"2016/7/7 13:00\",\n\t\t\"repairState\": \"Revised\",\n\t\t\"revisedDate\": \"2016/7/9 13:24\",\n\t\t\"comments\":[{\n\t\t\t\t\"name\": \"JessieChen\",\n\t\t\t\t\"comment\": \" still broken !!!\",\n\t\t\t\t\"date\": \"2016/7/9 13:24\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\"name\": \"JessieChen\",\n\t\t\t\t\"comment\": \" still broken !!!\",\n\t\t\t\t\"date\": \"2016/7/10 13:24\"\t\n\t\t\t\t}]\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/11_deviceRepair.js",
    "groupTitle": "Repair"
  },
  {
    "type": "get",
    "url": "host/repair/comment",
    "title": "Update comment",
    "name": "UpdateRepairComment",
    "group": "Repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Repair id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/repair/comment?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n  \"accountId\": \"86c6acgs2eac5a56dfg314c8\",\n  \"comment\": \"still broken !!!\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/11_deviceRepair.js",
    "groupTitle": "Repair"
  },
  {
    "type": "get",
    "url": "host/repair/state",
    "title": "Update state",
    "name": "UpdateRepairState",
    "group": "Repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Repair id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>&quot;Damage&quot; | &quot;Revised&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/repair/state?data={\n  \"_id\": \"57c6ac272eac5acc7fd314c8\",\n  \"state\": \"Revised\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/11_deviceRepair.js",
    "groupTitle": "Repair"
  },
  {
    "type": "get",
    "url": "host/role/create",
    "title": "Create",
    "name": "CreateRole",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "elseParam",
            "description": "<p>&quot;0&quot; | &quot;1&quot; | &quot;2&quot; ,( hide | read | edit )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/role/create?data={\n  \"roleName\": \"admin\",\n  \"locationList\":\"1\",\n  \"groupSetting\":\"1\",\n  \"addNewLocation\":\"1\",\n  \"addNewGateways\":\"1\",\n  \"addNewDevice\":\"1\",\n  \"accountList\":\"1\",\n  \"createNewAccount\":\"1\",\n  \"changeMyPassword\":\"1\",\n  \"roleOfRightsManagement\":\"1\",\n  \"deviceRepair\":\"1\",\n  \"deviceRepairList\":\"1\",\n  \"appErrorLog\":\"1\",\n  \"logingLog\":\"1\",\n  \"about\":\"1\",\n  \"chart\":\"1\",\n  \"report\":\"1\",\n  \"ruleList\":\"1\",\n  \"addNewRule\":\"1\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/7_role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "host/role/query",
    "title": "Query",
    "name": "QueryAllRole",
    "group": "Role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/role/query",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": [{\n    \"_id\":\"57c6ac272eac5acc7fd314c8\",\n    \"role\":\"admin\",\n    \"locationList\":\"1\",\n    \"groupSetting\":\"1\",\n    \"addNewLocation\":\"1\",\n    \"addNewGateways\":\"1\",\n    \"addNewDevice\":\"1\",\n    \"accountList\":\"1\",\n    \"createNewAccount\":\"1\",\n    \"changeMyPassword\":\"1\",\n    \"roleOfRightsManagement\":\"1\",\n    \"deviceRepair\":\"1\",\n    \"deviceRepairList\":\"1\",\n    \"appErrorLog\":\"1\",\n    \"logingLog\":\"1\",\n    \"about\":\"1\",\n    \"chart\":\"1\",\n    \"report\":\"1\",\n    \"ruleList\":\"1\",\n    \"addNewRule\":\"1\"\n }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/7_role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "host/role/update",
    "title": "Update",
    "name": "UpdateRole",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "elseParam",
            "description": "<p>&quot;0&quot; | &quot;1&quot; | &quot;2&quot; ,( hide | read | edit )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return_code",
            "description": "<p>Error number.</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonString",
            "optional": false,
            "field": "return_result",
            "description": "<p>Result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Url:",
          "content": "host/role/update?data={\n  \"_id\":\"57c6ac272eac5acc7fd314c8\",\n  \"roleName\":\"admin\",\n  \"locationList\":\"1\",\n  \"groupSetting\":\"1\",\n  \"addNewLocation\":\"1\",\n  \"addNewGateways\":\"1\",\n  \"addNewDevice\":\"1\",\n  \"accountList\":\"1\",\n  \"createNewAccount\":\"1\",\n  \"changeMyPassword\":\"1\",\n  \"roleOfRightsManagement\":\"1\",\n  \"deviceRepair\":\"1\",\n  \"deviceRepairList\":\"1\",\n  \"appErrorLog\":\"1\",\n  \"logingLog\":\"1\",\n  \"about\":\"1\",\n  \"chart\":\"1\",\n  \"report\":\"1\",\n  \"ruleList\":\"1\",\n  \"addNewRule\":\"1\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"return_code\": \"0\",\n \"return_result\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/panpanpan/Desktop/apidoc/7_role.js",
    "groupTitle": "Role"
  }
] });
