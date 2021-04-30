import database from 'assets/jsons/db.json';

import IItemDropdown from 'components/Dropdown/IItemDropdown';
import IScholarship from 'models/IScholarship';

interface ParamsGetScholarship {
  isDistance: boolean;
  isPresential: boolean;
  course?: string | number;
  city?: string | number;
  max_amount: string;
}

const sortInputs = (input: IItemDropdown[]) => {
  return input.sort((a: IItemDropdown, b: IItemDropdown) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  });
};

export const getAllCities = () => {
  const cities: IItemDropdown[] = database.reduce((a: any, b: IScholarship) => {
    const i = a.findIndex((x: IItemDropdown) => x.label === b.campus.city);

    if (i === -1) {
      const item: IItemDropdown = {
        label: b.campus.city,
        value: b.campus.city,
        key: `citie_${i}`,
      };
      a.push(item);
    }
    return a;
  }, []);

  return sortInputs(cities);
};

export const getAllCourses = () => {
  const courses: IItemDropdown[] = database.reduce(
    (a: any, b: IScholarship) => {
      const i = a.findIndex((x: IItemDropdown) => x.label === b.course.name);

      if (i === -1) {
        const item: IItemDropdown = {
          label: b.course.name,
          value: b.course.name,
          key: `course_${i}`,
        };
        a.push(item);
      }
      return a;
    },
    [],
  );

  return sortInputs(courses);
};

export const getScholarship = (params: ParamsGetScholarship) => {
  const db: IScholarship[] = [...database];
  let filtered: IScholarship[] = [];

  if (params.isDistance || params.isPresential) {
    if (params.isDistance) {
      const auxDistance = db.filter(i => i.course.kind === 'EaD');
      filtered = [...auxDistance, ...filtered];
    }

    if (params.isPresential) {
      const auxDistance = db.filter(i => i.course.kind === 'Presencial');
      filtered = [...auxDistance, ...filtered];
    }
  } else {
    filtered = [...db];
  }

  if (params.city) {
    const auxDistance = filtered.filter(i => i.campus.city === params.city);
    filtered = [...auxDistance];
  }

  if (params.course) {
    const auxDistance = filtered.filter(i => i.course.name === params.course);
    filtered = [...auxDistance];
  }

  if (params.max_amount) {
    const auxDistance = filtered.filter(
      i => i.price_with_discount <= parseInt(params.max_amount),
    );
    filtered = [...auxDistance];
  }

  // Parei aqui na filtragem

  return filtered;
};
