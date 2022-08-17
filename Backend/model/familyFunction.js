const mongoose = require("mongoose");

const FamilyFunctionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    TypeOfFunction: {
      type: String,
      required: true,
    },
    NameOfFunction: {
      type: String,
    },
    NoOfDays: {
      type: Number,
    },
    FromDate: {
      type: String,
    },
    ToDate: {
      type: String,
    },

    NoOfGuests: {
      type: Number,
    },
    MinBudget: {
      type: String,
      required: true,
    },
    MaxBudget: {
      type: String,
      required: true,
    },
    Shows: {
      show: [
        {
          type: String,
        },
      ],
      musicvalues: {
        type: String,
      },
      dancevalues: {
        type: String,
      },
      dj: {
        type: String,
      },
    },
    Decoration: {
      RegularDecoration: {
        type: String,
      },
      ThemeDecoration: {
        type: String,
      },
    },
    SpecialService: {
      type: String,
    },
    OtherServices: [
      {
        type: String,
      },
    ],
    OtherServiceValues: {
      invitation: {
        type: String,
      },
      Photography: {
        type: Object,
      },
      venues: {
        venue1: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
        venue2: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
        venue3: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
      },
    },
    Food: {
      Foodtype: {
        type: String,
      },
      items: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const FamilyFunctionForm = mongoose.model(
  "FamilyFunctionForm",
  FamilyFunctionSchema
);

exports.FamilyFunctionForm = FamilyFunctionForm;
