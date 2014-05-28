(function() {
  window.App = Ember.Application.create();

  App.config = {
    gmapKey: "AIzaSyB2dwuEYrEYwdJPr5gr4jOrMfMn2oUHXh4"
  };

  App.Page = Ember.Object.extend({
    init: function() {
      var pages;
      if (!this.get("id")) {
        throw new Error('You must specify an id');
      }
      pages = App.get("pages");
      pages.push(this);
      return pages.sort(function(a, b) {
        return a.sort - b.sort;
      });
    },
    defineRoute: Ember.computed(function() {
      var id;
      id = this.get('id').toString();
      return function() {
        return this.route(id, {
          path: id
        });
      };
    }).property(),
    screenName: Ember.computed(function() {
      return Ember.String.capitalize(this.get('id').toString());
    }).property(),
    sort: Infinity
  });

  App.pages = [];

  App.BaseRoute = Ember.Route.extend({
    activate: function() {
      this._super();
      return window.scrollTo(0, 0);
    }
  });

}).call(this);

(function() {
  var createMachine;

  App.Machines = [];

  createMachine = function(data) {
    return App.Machines.push(Ember.Object.create(data));
  };

  createMachine({
    id: "ch-228-series",
    serial: "CH-228-Series",
    name: "Facial Tissue Interfolder with optional Fully Auto Transfer Unit",
    line: "facial-tissue-lines",
    image: "images/ch-228-series.jpg",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "CH-228 is our horizontal type facial tissue interfolder. The machine is equipped with edge embosser and vacuum folding head for clean cutting quality. Steel to Rubber Emboss and Lamination unit are also available for producing neat product.",
    extraSection: {
      title: "Fully Automatic Transfer",
      description: "The newly developed Fully Auto Transfer Unit can be selected to upgrade the standard interfolder to become a fully automatic solution. The cycle timing of the auto trasfer unit is adjustable to achieve different sheet count needs. The auto transfer unit enables the integration of following packing system without additional labor cost.",
      image: "images/ch-228-auto.jpg"
    },
    options: [
      {
        name: "Emboss and Lamination",
        lists: ["Point to Point Lamination System", "Nested Lamination System", "Steel to Steel Emboss Rolls", "Steel to Rubber Emboss Rolls ( 2 or 4 Stations)"]
      }, {
        name: "Log Saw",
        lists: ["Log Saw please find model: <a href='/#/product-lines/log-saw/ch-705-series'>CH705</a>"]
      }, {
        name: "Packing",
        lists: ["Box Closing please find model: A016"]
      }
    ]
  });

  createMachine({
    id: "ch-230-series",
    serial: "CH-230-Series",
    name: "Vertical Type Automatic Transfer Interfolder",
    image: "images/ch-230-series.jpg",
    line: "facial-tissue-lines",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "The vertical type automatic trasfer Interfolder is developed for essembling in fully automatic converting line.<br /> The automatic separation and transfer device enables the integration of following packing system without additional labor cost.",
    options: [
      {
        name: "Emboss and Lamination",
        lists: ["Point to Point Lamination System", "Nested Lamination System", "Steel to Steel Emboss Rolls", "Steel to Rubber Emboss Rolls ( 2 or 4 Stations)"]
      }, {
        name: "Log Saw",
        lists: ["Log Saw please find model: <a href='/#/product-lines/log-saw/ch-705-series'>CH705</a>"]
      }, {
        name: "Packing",
        lists: ["Box Closing please find model: A016"]
      }
    ]
  });

  createMachine({
    id: "ch-330-series",
    serial: "CH-330-Series",
    name: "High-Speed Mechinical Napkin Folder",
    image: "images/ch-330-series.jpg",
    line: "napkin-folders",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "CH330 is our classical high-speed napkin folding solution for 1/4 and 1/8 folding.<br />This series is available in 6 lane (deck) for Tall Fold Napkin; 4 deck for Beverage Napkin; 3 deck for luncheon napkin.<br />This high speed solution is capable of producing napkin at 1000-1500 sheet per deck.",
    options: [
      {
        name: "Emboss and Lamination",
        lists: ["point to point embossing and lamination unit for 1 and 2 deck", "Steel to Steel Emboss Rolls", "Steel to Rubber Emboss Rolls ( 2 or 4 Stations)"]
      }, {
        name: "Printing",
        lists: ["2-4 color printing", "Drum Printer with heater"]
      }
    ]
  });

  createMachine({
    id: "a500-dp",
    serial: "A500-DP",
    name: "Fully Automatic Dispenser Napkin Line",
    image: "images/a500-dp.jpg",
    line: "napkin-folders",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "Developed from our standard single lane vacuum type napkin folder, A500-DP is our latest fully automatic dispenser napkin converting line. <br /> Available in 4 lane, A500-DP line is equipped with updated automatic separation and transfer device, and  fully integrated with bander system which can provide production of packed dispenser napkin at 16 packs/min (250 counts/pack)."
  });

  createMachine({
    id: "a500-series",
    serial: "A500-Series",
    name: "Vacuum Type Napkin Folder",
    image: "images/a500-series.jpg",
    line: "napkin-folders",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "A500 series is the standard vacuum type napkin folding solution for various folding such as unequal fold and double cross fold.<br /> A500 series is good for making border or full pattern emboss napkin with 5 color printing maximum.",
    options: [
      {
        name: "Emboss and Lamination",
        lists: ["Steel to Steel Emboss Rolls", "Steel to Rubber Emboss Rolls ( 2 or 4 Stations)", "Point to Point Embossing and Lamination Unit"]
      }, {
        name: "Printing",
        lists: ["2-5 color printer (Rubber Rool or Doctor Chamber Type)", "Drum printer with heater"]
      }
    ]
  });

  createMachine({
    id: "300au-series",
    serial: "300AU-Series",
    name: "Fully Automatic Multifold (z-fold) Hand Towel Line",
    line: "hand-towel-lines",
    image: "images/300au-series.jpg",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "CH-300AU is multifold interfolder for hand towel production. The machine is provided with kraft paper bander and log saw for fully automatic operation<br /> Steel to steel embossers for making 1-ply products and steel to rubber embossers with lamination unit for making 2-ply products are both available."
  });

  createMachine({
    id: "ch-705-series",
    serial: "CH-705-Series",
    name: "Log Saw",
    line: "log-saw",
    image: "images/ch-705-series.jpg",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "This machine is designed for cutting facial tissue or hand towel piles at a desired length. The whole equipment is consisting of conveyor unit, cutting head with a circular knife, grinding system and cutting/conveying belts."
  });

  createMachine({
    id: "ch-168-series",
    serial: "CH-168-Series",
    name: "Bander",
    line: "bander",
    image: "images/ch-168-series.jpg",
    producer: "Chia Houng Machinery",
    producerImg: "images/chiaHoung-logo.png",
    description: "Ch168 series is our efficient solution to band hand towel paper logs or pack of dispenser napkin.This machine can be easily connected auto transfer unit for interfolder or napkin folder to consist a fully automatic converting line."
  });

}).call(this);

(function() {
  App.Lines = [
    {
      id: "facial-tissue-lines",
      name: "Facial Tissue Lines",
      image: "images/facial-tissue-line-1.jpg",
      types: ["Automatic Interfolder Transfer", "Manual Interfolder Transfer"],
      options: ["Emboss Unit", "Lamination Unit", "Box Closing"],
      machines: ["ch-228-series", "ch-230-series"],
      defaultMachine: "ch-228-series"
    }, {
      id: "napkin-folders",
      name: "Napkin Folders",
      image: "images/napkin-folders-1.jpg",
      types: ["Universal Folding Vacuum Type", "High Speed Mechanical Type", "Single / Multi lane", "Fully Automatic Dispenser Napkin Line"],
      options: ["Kraft Paper Bander", "Lamination Unit", "Printing Unit", "Emboss Unit"],
      machines: ["ch-330-series", "a500-dp", "a500-series"],
      defaultMachine: "ch-330-series"
    }, {
      id: "hand-towel-lines",
      name: "Hand Towel Lines",
      image: "images/hand-towel-line.jpg",
      types: ["V-Fold / Z-Fold", "Automatic / Manual Transfer Type"],
      options: ["Emboss Unit", "Lamination Unit", "Kraft Paper Bander", "Log Saw"],
      machines: ["300au-series"],
      defaultMachine: "300au-series"
    }, {
      id: "log-saw",
      name: "Log Saw",
      types: [],
      options: [],
      machines: ["ch-705-series"],
      defaultMachine: "ch-705-series"
    }, {
      id: "bander",
      name: "Bander",
      types: [],
      options: [],
      machines: ["ch-168-series"],
      defaultMachine: "ch-168-series"
    }
  ];

  App.Lines.forEach(function(line) {
    var machineObjs;
    machineObjs = [];
    line.machines.forEach(function(machineId) {
      return machineObjs.push(App.Machines.find(function(machine) {
        if (machine.id === machineId) {
          return machine;
        }
      }));
    });
    return line.machines = machineObjs;
  });

}).call(this);

(function() {
  var contactModel, keys;

  keys = ["name", "company", "phone", "message", "email"];

  contactModel = Ember.Object.extend();

  App.Contact = contactModel.reopenClass({
    submit: function(contact) {
      var data, k, _i, _len;
      data = {};
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        k = keys[_i];
        data[k] = contact.get(k);
      }
      return $.post("contact.php", data);
    }
  });

  App.ContactInfo = [
    {
      key: "Address",
      value: "6F, No. 75, Sec. 3, Chung King North Road, Taipei 103, Taiwan",
      icon: "glyphicon-home"
    }, {
      key: "Phone",
      value: "886-2-2597-1299",
      icon: "glyphicon-earphone"
    }, {
      key: "Fax",
      value: "886-2-2597-1300",
      icon: "glyphicon-print"
    }, {
      key: "E-mail",
      value: "ocn@ms12.hinet.net",
      icon: "glyphicon-envelope"
    }
  ];

}).call(this);

(function() {
  App.About = "<p>Established in 1981. We are manufacturers and exporters of tissue paper converting machines in Taiwan for 33 years.</p> <p>We are supplying tissue converting machines as follows:</p> <ol> <li>Facial Tissue Making Machine (Interfolder in Manual or Automatic Transfer Type), with optional point to point emboss roll and lamination unit. </li> <li>Paper Napkin Making Machine (Napkin Folder in Vacuum or Mechanical type, single lane or multi-lane) with optional kraft paper bander.</li> <li>V-Fold and Z-Fold Hand Towel Making Machine (Manual or Automatic Transfer Type), with steel to steel emboss rolls, steel to rubber emboss rolls with lamination or not, and with kraft paper bander and log saw.</li> </ol> <p>We have exported more than 1000 machines to more than 30 contries, including the end-users in China, Hong Kong, South East Asia, New Zealand, Australia, South Pacific, India, Pakistan, Mid-East, Egypt, Africa, Europe, U.S.A., Canada, Caribbean, Central and South America.</p>";

}).call(this);

(function() {
  App.VerifyFormMixin = Ember.Mixin.create({
    isReady: false,
    isOneInputLeft: false,
    reset: function() {
      return this.setProperties({
        isReady: false,
        isOneInputLeft: false
      });
    },
    actions: {
      checkNow: function(isValid, key) {
        var input, notReady, _i, _len, _ref;
        _ref = this.get("formInputs");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          input = _ref[_i];
          if (input.key === key) {
            input.isValid = isValid;
          }
        }
        notReady = Array.prototype.find.call(this.get("formInputs"), function(input) {
          return input.isValid === false && input.isNecessary === true;
        });
        this.set("isReady", !notReady);
        return this.set("isOneInputLeft", false);
      },
      keyUp: function() {
        var i, input, _i, _len, _ref;
        i = 0;
        _ref = this.get("formInputs");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          input = _ref[_i];
          if (input.isValid === false && input.isNecessary === true) {
            i++;
          }
        }
        if (i === 1) {
          return this.set("isOneInputLeft", true);
        }
      }
    }
  });

}).call(this);

(function() {
  App.VerifyInputView = Ember.View.extend({
    templateName: "verifyInput",
    isValid: false,
    isInvalid: false,
    classNameBindings: [":form-group", "isEmpty::has-feedback", "isValid:has-success", "isInvalid:has-error"],
    rows: "5",
    placeholder: Ember.computed(function() {
      return "Enter " + (this.get("key"));
    }).property("key"),
    typeObserver: (function() {
      var k;
      k = Ember.String.capitalize(this.get("inputType"));
      return this.set("is" + k, true);
    }).observes("inputType").on("init"),
    isOneInputLeft: Ember.computed(function() {
      return this.get("controller.isOneInputLeft");
    }).property("controller.isOneInputLeft"),
    keyUp: function() {
      this.get("controller").send("keyUp");
      if (this.get("isInvalid") || this.get("isOneInputLeft")) {
        return this.verifyFn();
      }
    },
    change: function() {
      return this.verifyFn();
    },
    verifyFn: function() {
      switch (this.get("verifyType")) {
        case "length":
          this.v_length();
          break;
        case "email":
          this.v_email();
          break;
        case "phone":
          this.v_phone();
          break;
        default:
          this.setValidation(!!this.get("value"));
      }
      return this.get("controller").send("checkNow", this.get("isValid"), this.get("key"));
    },
    setValidation: function(isValid) {
      this.set("isValid", isValid);
      return this.set("isInvalid", !isValid);
    },
    checkEmpty: function() {
      var value;
      value = this.get("value");
      if (!!value) {
        this.set("isEmpty", false);
        return value;
      }
      this.set("isEmpty", true);
      this.set("isValid", false);
      this.set("isInvalid", false);
      return void 0;
    },
    v_length: function() {
      var text;
      text = this.checkEmpty();
      if (!text) {
        return;
      }
      if (text.length > 2) {
        return this.setValidation(true);
      } else {
        return this.setValidation(false);
      }
    },
    v_email: function() {
      var reg, text;
      text = this.checkEmpty();
      if (!text) {
        return;
      }
      reg = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
      if (reg.test(text)) {
        return this.setValidation(true);
      } else {
        return this.setValidation(false);
      }
    },
    v_phone: function() {
      var reg, text;
      text = this.checkEmpty();
      if (!text) {
        return;
      }
      reg = new RegExp("\\d{5,12}");
      if (reg.test(text)) {
        return this.setValidation(true);
      } else {
        return this.setValidation(false);
      }
    }
  });

  Ember.Handlebars.helper("capitalize", function(value) {
    return Ember.String.capitalize(value);
  });

}).call(this);

(function() {
  App.ApplicationController = Ember.Controller.extend({
    contactInfo: App.ContactInfo,
    aboutus: App.About
  });

}).call(this);

(function() {
  App.IndexRoute = App.BaseRoute.extend();

  App.IndexController = Ember.Controller.extend({
    lines: Ember.computed(function() {
      return App.Lines.slice(0, 3);
    }).property("App.Lines"),
    actions: {
      one: function() {
        return console.log("one");
      },
      two: function() {
        return console.log("two");
      }
    }
  });

}).call(this);

(function() {
  App.Page.create({
    id: "lines",
    sort: 2,
    screenName: "Product Lines",
    defineRoute: function() {
      return this.resource("lines", {
        path: "product-lines"
      }, function() {
        return this.resource("machine", {
          path: ":line_id/:machine_id"
        });
      });
    }
  });

  App.LinesRoute = Ember.Route.extend({
    model: function() {
      return App.Lines;
    },
    redirect: function(model, transition) {
      if (!transition.params.machine) {
        return this.transitionTo("machine", App.Lines[0].id, App.Machines[0].id);
      }
    }
  });

  App.LinesController = Ember.Object.extend();

  App.LineRoute = Ember.Route.extend({
    model: function(params) {
      return console.log("App.LineRoute model hook");
    }
  });

}).call(this);

(function() {
  App.MachineRoute = App.BaseRoute.extend({
    model: function(params) {
      return App.Machines.find(function(machine) {
        if (machine.id === params.machine_id) {
          return machine;
        }
      });
    }
  });

  App.MachineController = Ember.ObjectController.extend({
    modelChange: (function() {
      return window.scrollTo(0, 0);
    }).observes("model")
  });

}).call(this);

(function() {
  App.Page.create({
    id: "contact",
    sort: 4,
    screenName: "Contact Us",
    defineRoute: function() {
      return this.route("contact");
    }
  });

  App.ContactRoute = App.BaseRoute.extend({
    model: function() {
      return Ember.Object.create();
    }
  });

  App.ContactController = Ember.ObjectController.extend(App.VerifyFormMixin, {
    contactInfo: App.ContactInfo,
    formInputs: [
      {
        key: "name",
        isNecessary: true,
        isValid: false
      }, {
        key: "company",
        isNecessary: true,
        isValid: false
      }, {
        key: "email",
        isNecessary: true,
        isValid: false
      }, {
        key: "phone",
        isNecessary: false,
        isValid: false
      }, {
        key: "message",
        isNecessary: true,
        isValid: false
      }
    ],
    submitText: "Submit",
    isSuccess: false,
    isError: false,
    reset: function() {
      return this.setProperties({
        isSuccess: false,
        isError: false,
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    },
    actions: {
      submit: function() {
        var saving;
        if (this.get("isSubmitting")) {
          return;
        }
        this.setProperties({
          isSubmitting: true,
          submitText: "Submitting..."
        });
        saving = App.Contact.submit(this.get("model"));
        saving.always((function(_this) {
          return function() {
            return _this.setProperties({
              isSubmitting: false,
              submitText: "Submit"
            });
          };
        })(this));
        saving.done((function(_this) {
          return function(res) {
            console.log("Message successfully sent");
            _this.set("isSuccess", true);
            return Ember.run.later(_this, _this.reset, 5000);
          };
        })(this));
        return saving.fail((function(_this) {
          return function(err) {
            console.log("Failed to sent message");
            _this.set("isError", true);
            return Ember.run.later(_this, function() {
              return this.set("isError", false);
            }, 5000);
          };
        })(this));
      }
    }
  });

  window.mapInitializer = function() {
    var latlng, map, mapOptions, marker, markerOptions;
    latlng = new google.maps.LatLng(25.065215, 121.513031);
    mapOptions = {
      zoom: 17,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    markerOptions = {
      map: map,
      position: latlng,
      title: "Ocean Associate",
      labelContent: "A",
      labelAnchor: new google.maps.Point(3, 30),
      labelClass: "labels",
      labelInBackground: false
    };
    return marker = new google.maps.Marker(markerOptions);
  };

}).call(this);

(function() {
  App.NavigationController = Ember.Controller.extend({
    pages: App.get("pages")
  });

  App.Router.map(function() {
    var router;
    router = this;
    return App.pages.forEach(function(page) {
      return page.get("defineRoute").call(router);
    });
  });

}).call(this);

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <img src=\"images/ocean-logo-2.png\" alt=\"Ocean Associate\" />\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <div class=\"media\">\n            <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":glyphicon info.icon :pull-left :heading-inverse")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n            <div class=\"media-body\">\n              <div class=\"media-heading heading-inverse\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "info.key", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n              <p class=\"p-inverse\">");
  stack1 = helpers._triageMustache.call(depth0, "info.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            </div>\n          </div>\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"header-bg\">\n  <header class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-4 col-sm-4 hidden-xs\">\n        <h1>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      </div>\n      \n      <div class=\"col-md-8 col-sm-8\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navigation", options) : helperMissing.call(depth0, "render", "navigation", options))));
  data.buffer.push("\n      </div>\n      \n    </div>\n  </header>\n</div>\n\n<div class=\"main-content-bg\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<div class=\"footer-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"about-us\">\n          <h4>About us</h4>\n          <div class=\"media\">\n            <div class=\"pull-left logo\">\n              <!-- <img src=\"images/ocean&#45;logo&#45;circle&#45;2.png\" alt=\"Ocean Associate Circle Logo\" />   -->\n              <img src=\"images/ocean-chiaHoung-logo-2.png\" alt=\"Ocean Associate and Chia Houng logo\" />  \n            </div>\n            <div class=\"media-body\">\n            <h4 class=\"media-heading strong-color\">\n              OCEAN ASSOCIATE CO., Ltd.\n            </h4>\n            <h4 class=\"media-heading strong-color\">\n              CHIA HOUNG MACHINERY CO., Ltd.\n            </h4>\n            <div class=\"hidden-xs\">\n              ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "aboutus", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n            </div>\n          </div>\n          <div class=\"visible-xs about-us-xs\">\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "aboutus", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"contact-info\">\n          <h4>Let's get in touch</h4>\n          ");
  stack1 = helpers.each.call(depth0, "info", "in", "contactInfo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"claim-rights\">\n  <div class=\"container\">\n    <div class=\"pull-left\">\n    © Ocean Associate 2014 - All right reserved\n    </div>\n    <div class=\"pull-right\">\n     Designed by <a href=\"https://github.com/ddhp\">ddhp</a>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <button type=\"button\" class=\"btn btn-primary\">Give us an inqury</button>\n      ");
  }

  data.buffer.push("<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n<!-- Indicators -->\n<ol class=\"carousel-indicators\">\n  <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n  <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n  <!-- <li data&#45;target=\"#carousel&#45;example&#45;generic\" data&#45;slide&#45;to=\"2\"></li> -->\n</ol>\n\n<!-- Wrapper for slides -->\n<div class=\"carousel-inner\">\n  <div class=\"item ocean-service active\">\n    <div class=\"img-container\">\n      <div class=\"img-centerer\">\n        <img src=\"images/carousel-ocean-service-2.jpg\" alt=\"Easy to have service from Ocean associate\" />\n      </div>\n    </div>\n    <div class=\"carousel-caption\">\n      <p><span class=\"em\">Welcome to Ocean</span></p>\n      <p><span>Profession In</span></p> \n      <p><span>Tissue Paper Converting</span></p>\n      <!-- <p><span>Professional</span></p> -->\n      <!-- <p><span>Services</span></p> -->\n      <p>\n        <small>We have been providing machines to our customer for more than 30 years</small>\n      </p>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n  <!-- another item -->\n\n  <div class=\"item tissue-world\">\n    <div class=\"img-container\">\n      <div class=\"img-centerer\">\n        <img src=\"images/carousel-tissue-world-3.jpg\" alt=\"Tissue world 2014\" />\n      </div>\n    </div>\n    <div class=\"carousel-caption\">\n      <div class=\"media\">\n        <img class=\"hidden-xs pull-left\" src=\"images/tissue-world-logo.jpg\" alt=\"tissue-world-logo\" />\n        <!-- for xs screen -->\n        <!-- <div class=\"clearfix visible&#45;xs\"></div> -->\n        <div class=\"media-body\">\n          <p><span>We are joining</span></p>\n          <p><span class=\"em\">Tissue World America</span></p>\n          <p><span class=\"date\">18-21 March 2014</span></p>\n          <p>\n            <small>Miami Beach Convention Center (MBCC-HALL A), USA</small>\n          </p>\n          <button type=\"button\" class=\"btn btn-primary\">Thank you for visiting us at stand no. 1425</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n<!-- Controls -->\n<!-- <a class=\"left carousel&#45;control\" href=\"#carousel&#45;example&#45;generic\" data&#45;slide=\"prev\"> -->\n<!--   <span class=\"glyphicon glyphicon&#45;chevron&#45;left\"></span> -->\n<!-- </a> -->\n<!-- <a class=\"right carousel&#45;control\" href=\"#carousel&#45;example&#45;generic\" data&#45;slide=\"next\"> -->\n<!--   <span class=\"glyphicon glyphicon&#45;chevron&#45;right\"></span> -->\n<!-- </a> -->\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <p ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":alert :alert-danger :fade isError:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Something wrong with server, please try again later.</p>\n          ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <p ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":alert :alert-info :fade isSuccess:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Message sent successfully, we will reply very soon!</p>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"media\">\n          <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":glyphicon info.icon :pull-left")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n          <div class=\"media-body\">\n            <div class=\"media-heading\">\n              ");
  stack1 = helpers._triageMustache.call(depth0, "info.key", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <p>");
  stack1 = helpers._triageMustache.call(depth0, "info.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n          </div>\n        </div>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"container contact-container\">\n  <div class=\"row\">\n\n    <!-- <div class=\"col&#45;md&#45;12\"> -->\n    <!--   <h4>Find us here</h4> -->\n    <!--   <div id=\"map_canvas\" class=\"map_canvas\"></div> -->\n    <!-- </div> -->\n\n  </div>\n  <div class=\"row\">\n    \n    <div class=\"col-md-8\">\n      <div class=\"contact-form\">\n        <h4>Get in touch with us by filling contact form below</h4>\n        <form role=\"form\">\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.VerifyInputView", {hash:{
    'inputType': ("text"),
    'verifyType': ("length"),
    'key': ("name"),
    'value': ("name"),
    'isNecessary': (true)
  },hashTypes:{'inputType': "STRING",'verifyType': "STRING",'key': "STRING",'value': "ID",'isNecessary': "BOOLEAN"},hashContexts:{'inputType': depth0,'verifyType': depth0,'key': depth0,'value': depth0,'isNecessary': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.VerifyInputView", {hash:{
    'inputType': ("text"),
    'verifyType': ("length"),
    'key': ("company"),
    'value': ("company"),
    'isNecessary': (true)
  },hashTypes:{'inputType': "STRING",'verifyType': "STRING",'key': "STRING",'value': "ID",'isNecessary': "BOOLEAN"},hashContexts:{'inputType': depth0,'verifyType': depth0,'key': depth0,'value': depth0,'isNecessary': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.VerifyInputView", {hash:{
    'inputType': ("text"),
    'verifyType': ("email"),
    'key': ("email"),
    'value': ("email"),
    'isNecessary': (true)
  },hashTypes:{'inputType': "STRING",'verifyType': "STRING",'key': "STRING",'value': "ID",'isNecessary': "BOOLEAN"},hashContexts:{'inputType': depth0,'verifyType': depth0,'key': depth0,'value': depth0,'isNecessary': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.VerifyInputView", {hash:{
    'inputType': ("text"),
    'verifyType': ("phone"),
    'key': ("phone"),
    'value': ("phone"),
    'isNecessary': (false)
  },hashTypes:{'inputType': "STRING",'verifyType': "STRING",'key': "STRING",'value': "ID",'isNecessary': "BOOLEAN"},hashContexts:{'inputType': depth0,'verifyType': depth0,'key': depth0,'value': depth0,'isNecessary': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.VerifyInputView", {hash:{
    'inputType': ("textArea"),
    'verifyType': ("length"),
    'key': ("message"),
    'value': ("message"),
    'isNecessary': (true)
  },hashTypes:{'inputType': "STRING",'verifyType': "STRING",'key': "STRING",'value': "ID",'isNecessary': "BOOLEAN"},hashContexts:{'inputType': depth0,'verifyType': depth0,'key': depth0,'value': depth0,'isNecessary': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n          ");
  stack1 = helpers['if'].call(depth0, "isError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-primary isReady::disabled isSubmitting:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "submitText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\"> \n      <div class=\"contact-info\">\n        <h4>Contact information</h4>\n        ");
  stack1 = helpers.each.call(depth0, "info", "in", "contactInfo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["example"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>Example Page</h2>\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"col-md-4 col-xs-12\">\n      <div class=\"service\">\n        <div class=\"img-container\">\n          <div class=\"img-centerer\">\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("line.image"),
    'alt': ("line.name")
  },hashTypes:{'src': "ID",'alt': "ID"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n          </div>\n        </div>\n        <h4>");
  stack1 = helpers._triageMustache.call(depth0, "line.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n        <p class=\"featuring\">\n          <span class=\"heading\">type</span><br />\n          ");
  stack1 = helpers.each.call(depth0, "type", "in", "line.types", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </p>\n        <p class=\"featuring\">\n          <span class=\"heading\">option</span><br />\n          ");
  stack1 = helpers.each.call(depth0, "option", "in", "line.options", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "machine", "line.id", "line.defaultMachine", options) : helperMissing.call(depth0, "link-to", "machine", "line.id", "line.defaultMachine", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br />\n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "option", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br />\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n        <button type=\"button\" class=\"btn btn-primary\">See detail</button>\n        ");
  }

  data.buffer.push("<button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "one", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></button>\n<button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "two", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></button>\n<div class=\"carousel-bg\">\n  <div class=\"container\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "carousel", options) : helperMissing.call(depth0, "render", "carousel", options))));
  data.buffer.push("\n  </div>\n</div>\n\n<div class=\"container index-container\">\n  <div class=\"row service-wrapper\">\n    <h4>Machines we have</h4>\n    ");
  stack1 = helpers.each.call(depth0, "line", "in", "lines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index.html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <script src=\"lib/");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" type=\"text/javascript\" charset=\"utf-8\"></script>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n    <script>\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n    ga('create', 'UA-49392253-1', 'ocn.com.tw');\n    ga('send', 'pageview');\n    </script>\n    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n  <script src=\"//localhost:35729/livereload.js\"></script>\n  ");
  }

  data.buffer.push("<!DOCTYPE html>\n<html>\n  <head>\n    <title>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</title>\n\n    <!-- meta tags -->\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\">\n    <meta name=\"keywords\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "keywords", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\">\n    <meta name=\"ROBOTS\" content=\"INDEX, FOLLOW\">\n    <meta name=\"description\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\">\n    <!-- fonts -->\n    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\n    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>\n\n\n    <!-- css  -->\n    <link href=\"");
  stack1 = helpers._triageMustache.call(depth0, "appCss", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" rel='stylesheet' type=\"text/css\" />\n\n    <!-- lib  -->\n    ");
  stack1 = helpers.each.call(depth0, "libScripts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <!-- js  -->\n    <script src=\"js/");
  stack1 = helpers._triageMustache.call(depth0, "appScript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" type=\"text/javascript\" charset=\"utf-8\"></script>\n\n    ");
  stack1 = helpers['if'].call(depth0, "production", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  </head>\n  <body>\n\n  <!-- livereload of grunt -->\n  ");
  stack1 = helpers.unless.call(depth0, "production", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <!-- google map api container -->\n  <div id=\"map_script\"></div>\n  </body>\n</html>\n");
  return buffer;
  
});

Ember.TEMPLATES["lines"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li>\n          ");
  stack1 = helpers._triageMustache.call(depth0, "line.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <ul>\n            ");
  stack1 = helpers.each.call(depth0, "machine", "in", "line.machines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n        </li>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n               ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "machine", "line.id", "machine.id", options) : helperMissing.call(depth0, "link-to", "machine", "line.id", "machine.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n               ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "machine", "line.id", "machine.id", options) : helperMissing.call(depth0, "link-to", "machine", "line.id", "machine.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n               ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "machine.serial", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

  data.buffer.push("<div class=\"container lines-container\">\n  <div class=\"row\">\n    <div class=\"col-md-3 nav-lines\" role=\"complementary\">\n    <ul class=\"list-unstyled\" role=\"navigation\">\n      ");
  stack1 = helpers.each.call(depth0, "line", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n    </div>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["machine"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['with'].call(depth0, "extraSection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<h5>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5>\n<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-responsive\" alt=\"Napkin Folder CH-228 Fully Automatic Transfer\" />\n<p>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<h5>Options</h5>\n\n");
  stack1 = helpers.each.call(depth0, "option", "in", "options", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h5 class=\"panel-title\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "option.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h5>\n  </div>\n  <div class=\"panel-body\">\n    ");
  stack1 = helpers.each.call(depth0, "list", "in", "option.lists", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "list", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("<br />\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n<button type=\"button\" class=\"btn btn-primary\">Contact us</button>\n");
  }

  data.buffer.push("<div class=\"col-md-9 machine\" role=\"main\">\n<h4 class=\"name\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image"),
    'alt': ("name")
  },hashTypes:{'src': "ID",'alt': "ID"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-responsive\"/>\n\n<h4 class=\"serial\"><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("producerImg"),
    'alt': ("producer")
  },hashTypes:{'src': "ID",'alt': "ID"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /> ");
  stack1 = helpers._triageMustache.call(depth0, "serial", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n<h5>Description</h5>\n<p>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n\n");
  stack1 = helpers['if'].call(depth0, "extraSection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "options", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<h5>For further information</h5>\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["machines"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"container machines-container\">\n  <div class=\"row\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["navigation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <li class=\"visible-xs hidden-sm\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "id", options) : helperMissing.call(depth0, "link-to", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "screenName", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <li class=\"visible-sm visible-md visible-lg hidden-xs\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "id", options) : helperMissing.call(depth0, "link-to", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      ");
  return buffer;
  }

  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n<div class=\"container-fluid\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand visible-xs\" href=\"#\">Ocean Associate</a>\n  </div>\n\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n    <ul class=\"nav navbar-nav\">\n      <!-- when xs screen  -->\n      <!-- give li a collapse data&#45;toggle -->\n      <li class=\"visible-xs hidden-sm\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      ");
  stack1 = helpers.each.call(depth0, "pages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <!-- remove it when larger than xs -->\n      <li class=\"visible-sm visible-md visible-lg hidden-xs\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      ");
  stack1 = helpers.each.call(depth0, "pages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div><!-- /.navbar-collapse -->\n</div><!-- /.container-fluid -->\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["types"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "type.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <ul>\n          ");
  stack1 = helpers.each.call(depth0, "serial", "in", "type.serials", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n      </li>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n             ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "machine", "type.id", "serial", options) : helperMissing.call(depth0, "link-to", "machine", "type.id", "serial", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n             ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "machine", "type.id", "serial", options) : helperMissing.call(depth0, "link-to", "machine", "type.id", "serial", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n             ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "serial", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-md-3 nav-machines\" role=\"complementary\">\n  <ul class=\"list-unstyled\">\n    ");
  stack1 = helpers.each.call(depth0, "type", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["verifyInput"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <span class=\"necessary\">&#42;</span>\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("view.value"),
    'class': ("form-control"),
    'placeholder': ("view.placeholder")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'placeholder': "ID"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("view.value"),
    'class': ("form-control"),
    'placeholder': ("view.placeholder"),
    'rows': ("view.rows")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "ID",'rows': "ID"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n    <span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n  ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n    <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n  ");
  }

  data.buffer.push("<!-- div with class 'form&#45;group' is created by view -->\n  <label for=\"");
  stack1 = helpers._triageMustache.call(depth0, "view.key", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\">");
  data.buffer.push(escapeExpression((helper = helpers.capitalize || (depth0 && depth0.capitalize),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "view.key", options) : helperMissing.call(depth0, "capitalize", "view.key", options))));
  data.buffer.push(" \n    ");
  stack1 = helpers['if'].call(depth0, "view.isNecessary", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </label>\n  ");
  stack1 = helpers['if'].call(depth0, "view.isText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "view.isTextArea", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  \n  ");
  stack1 = helpers['if'].call(depth0, "view.isValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "view.isInvalid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});