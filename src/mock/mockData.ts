// 전체기간 목록 조회
export const STUDY_LIST_ALL: {
  studyRecords: {
    studyId: string;
    name: string;
    timePerCycle: number;
    totalCycle: number;
    createdDate: string;
  }[];
  pageInfo: {
    totalPages: number;
  };
} = {
  studyRecords: Array.from({ length: 218 }).map((_, index) => {
    return {
      studyId: String(index),
      name: `안오면 지상렬${index + 1} 전체`,
      totalCycle: Math.floor(Math.random() * 8) + 1,
      timePerCycle: (Math.floor(Math.random() * (12 - 1 + 1)) + 1) * 5,
      createdDate: '2023-08-16T13:33:02.810Z',
    };
  }),
  pageInfo: {
    totalPages: 11,
  },
};

// 3개월 목록 조회
export const STUDY_LIST_THREE_MONTH: {
  studyRecords: {
    studyId: string;
    name: string;
    timePerCycle: number;
    totalCycle: number;
    createdDate: string;
  }[];
  pageInfo: {
    totalPages: number;
  };
} = {
  studyRecords: Array.from({ length: 50 }).map((_, index) => {
    return {
      studyId: String(index),
      name: `안오면 지상렬${index + 1} 3개월`,
      totalCycle: Math.floor(Math.random() * 8) + 1,
      timePerCycle: (Math.floor(Math.random() * (12 - 1 + 1)) + 1) * 5,
      createdDate: '2023-08-16T13:33:02.810Z',
    };
  }),
  pageInfo: {
    totalPages: 3,
  },
};

// 1개월 목록 조회
export const STUDY_LIST_ONE_MONTH: {
  studyRecords: {
    studyId: string;
    name: string;
    timePerCycle: number;
    totalCycle: number;
    createdDate: string;
  }[];
  pageInfo: {
    totalPages: number;
  };
} = {
  studyRecords: Array.from({ length: 27 }).map((_, index) => {
    return {
      studyId: String(index),
      name: `안오면 지상렬${index + 1} 1개월`,
      totalCycle: Math.floor(Math.random() * 8) + 1,
      timePerCycle: (Math.floor(Math.random() * (12 - 1 + 1)) + 1) * 5,
      createdDate: '2023-08-16T13:33:02.810Z',
    };
  }),
  pageInfo: {
    totalPages: 2,
  },
};

// 1개월 목록 조회
export const STUDY_LIST_EMPTY: {
  studyRecords: {
    studyId: string;
    name: string;
    timePerCycle: number;
    totalCycle: number;
    createdDate: string;
  }[];
  pageInfo: {
    totalPages: number;
  };
} = {
  studyRecords: [],
  pageInfo: {
    totalPages: 0,
  },
};

// 1주일 목록 조회
export const STUDY_LIST_WEEK: {
  studyRecords: {
    studyId: string;
    name: string;
    timePerCycle: number;
    totalCycle: number;
    createdDate: string;
  }[];
  pageInfo: {
    totalPages: number;
  };
} = {
  studyRecords: Array.from({ length: 12 }).map((_, index) => {
    return {
      studyId: String(index),
      name: `안오면 지상렬${index + 1} 1주일`,
      totalCycle: Math.floor(Math.random() * 8) + 1,
      timePerCycle: (Math.floor(Math.random() * (12 - 1 + 1)) + 1) * 5,
      createdDate: '2023-08-16T13:33:02.810Z',
    };
  }),
  pageInfo: {
    totalPages: 0,
  },
};
