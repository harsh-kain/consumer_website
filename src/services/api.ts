import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: " https://amrutam-quiz-api.azurewebsites.net/",
  }),
  endpoints: (build) => ({
    doctorList: build.query({
      query(params) {
        return {
          url: "doctor-list",
          params: Object.fromEntries(
            Object.entries(params).map(([key, value]) => [
              key,
              value === null ? "" : value,
            ]),
          ),
          method: "GET",
        };
      },
    }),
  }),
});

export const { useDoctorListQuery } = api;
