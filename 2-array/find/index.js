export default function find00OldPerson(collection) {
  return collection.find(element => {
    return element.age <= 20 && element.age >= 10;
  }).name;
}
