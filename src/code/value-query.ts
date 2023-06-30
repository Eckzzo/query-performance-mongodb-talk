[
    {
      $match: {
        removedAt: null,
        company: {
          $oid: 'string',
        },
        bankCode: {
          $ne: 'string',
        },
      },
    },
    {
      $sort: {
        time: -1,
      },
    },
    {
      $match: {
        value: {
          $gte: 525252,
        },
      },
    },
    {
      $match: {
        value: {
          $lte: 525252,
        },
      },
    },
    {
      $skip: 0,
    },
    {
      $limit: 30,
    },
    {
      $project: {
        _id: 1,
      },
    },
  ]