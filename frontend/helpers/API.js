import axios from "axios";
const qs = require("qs");

export const API = {};

const url = process.env.API_HOST_PROD;
API.siteUrl = `${process.env.API_URL}/`;
API.url = `${process.env.API_URL}`;

API.getStudentPythYakhPage = () => axios(`${url}/student-pyth-yakh?populate=*`)

API.getSlides = () => axios(`${url}/hero-slides?populate=*`);
API.getSecondCollegeSlides = () => axios(`${url}/pith-yakh-slides?populate=*`);

API.createRule = (post) => axios.post(`${url}/rules`, { data: post });
API.getRules = () => axios(`${url}/rules?populate=*`);
API.getRule = (id) => axios(`${url}/rules/${id}`);

API.getEvents = () => axios(`${url}/events?populate=*&sort[0]=start_date:desc`);
API.getEvent = (id) => axios(`${url}/events/${id}?populate=*`);

API.getNews = () => axios(`${url}/news?populate=*&sort[0]=date:desc`);
API.getAds = () => axios(`${url}/afs?populate=*&sort[0]=date:desc&sort[1]=createdAt:desc`);
API.getAd = (id) => axios(`${url}/afs/${id}?populate=*&sort[0]=date:asc`);
API.getCollegeNews = () =>
  axios(`${url}/news?populate=*&sort[0]=date:desc&filters[tags][id][$eq]=1`);
API.getNewPost = (id) => axios(`${url}/news/${id}?populate=*`);

API.getAttestationPage = () => axios(`${url}/attestation-page`);
API.getAttestationPageSecondCollege = () => axios(`${url}/attestation-pytach`);

API.getAttestationTeacher = (teacher) =>
  axios(`${url}/attestations?filters[slug][$eq]=${teacher}`);

API.getSpecialties = () =>
  axios(`${url}/specialties?sort[0]=code&populate=*&filters[type][$eq]=speciality`);

API.getStatistics = () => axios(`${url}/statistic?populate=*`);

const query = qs.stringify({
  populate: [
    "technologies",
    "technologies.icon",
    "tags",
    "advantages",
    "cover",
    "durations",
    "promo_list",
    "questions",
    "quote",
    "resume",
    "reviews",
    "salary",
    "training_plan",
    "work_places",
    "works",
    "works.image",
  ],
});

API.getSpecialty = (id) => axios(`${url}/specialties/${id}?${query}`);
API.getEmployeeRoles = () => axios(`${url}/employee-roles?populate=*`);

API.getPage = (id) => axios(`${url}/posts/${id}?populate=*`);

API.getSvedens = () =>
  axios(
    `${url}/posts?filters[category][slug][$eq]=sveden&sort[0]=priority&populate=*`
  );

API.getSvedensSecondCollege = () =>
  axios(`${url}/posts?filters[category][slug][$eq]=sveden-pith-yakh&populate=*&sort[0]=priority`);

API.getWordskills = () =>
  axios(`${url}/posts?filters[category][slug][$eq]=wordskills&populate=*`);

API.getIkar = () =>
  axios(`${url}/posts?filters[category][slug][$eq]=ikar&populate=*`);


API.getMedical = () =>
  axios(`${url}/posts?filters[category][slug][$eq]=medical&populate=*`);

API.getEdProcess = () =>
  axios(
    `${url}/posts?filters[category][slug][$eq]=educational-process&populate=*`
  );

API.getEdProcessPythYakh = () =>
  axios(
    `${url}/posts?filters[category][slug][$eq]=educational-process-pyth-yakh&populate=*`
  );

API.getReceptionCampainPages = (year) =>
  axios(
    `${url}/posts?filters[category][slug][$eq]=reception-campain-${year}&populate=*&sort[0]=priority`
  );
API.getCommissonPage = () => axios(`${url}/reception-campain`);

API.getGraduatePages = () =>
  axios(`${url}/posts?filters[category][slug][$eq]=graduate&populate=*`);
API.getEmploymentPage = () => axios(`${url}/employment`);

API.getVacancies = () => axios(`${url}/vacancies`);
API.getVacancy = (id) => axios(`${url}/vacancies/${id}`);

API.getCoursesPage = () => axios(`${url}/course`);
API.getCourses = () => axios(`${url}/specialties?populate=*`);

API.getPageBySlug = (slug) =>
  axios(encodeURI(`${url}/posts?populate=*&filters[slug][$eq]=${slug}`));
API.getPageById = (id) => axios(encodeURI(`${url}/posts/${id}?populate=*`));


API.getEmployees = (category = "Руководство", isPytach) => {

  let isPytachFilter = {
    $or: [
      {
        isPytach: {
          $eq: false
        }
      },
      {
        isPytach: {
          $null: true
        }
      }
    ]
  }

  if (isPytach) {
    isPytachFilter = {
      isPytach: {
        $eq: true
      }
    }
  }


  const query = qs.stringify({
    filters: {
      category: {
        name: {
          $eq: category
        }
      },
      ...isPytachFilter
    },
    sort: ['rank', 'name:asc'],
    populate: "*"
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  return axios(`${url}/employees?${query}`);
};

API.getEmployer = (id) =>
  axios(encodeURI(`${url}/employees/${id}?&populate=*`));

API.getSchedule = () => {
  const query = qs.stringify(
    {
      populate: [
        "fullTimeSchedule",
        "fullTimeSchedule.files",
        "distantSchedule",
        "distantSchedule.files",
        "partTimeScheduleFiles",
        "sessionDates",
        "OZFO",
        "OZFO.files",
        "pythYakhCollege ",
        "pythYakhCollege.files"
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  return axios(`${url}/schedule?${query}`);
};
