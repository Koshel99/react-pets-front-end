// src/services/petService.js

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const petService = {
  index: async () => {
    try {
      const res = await fetch(BASE_URL);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  },

  create: async (formData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  update: async (formData, petId) => {
    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  },

  deletePet: async (petId) => {
    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'DELETE',
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  },
};

export const index = petService.index;
export const create = petService.create;
export const update = petService.update;
export const deletePet = petService.deletePet;

export default petService;
