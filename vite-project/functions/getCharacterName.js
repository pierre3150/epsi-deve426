export async function getCharacterName(peopleId) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${peopleId}/`);
    const data = await response.json();
    const name = data.name;
    return name;
  } catch (error) {
    throw new Error("Failed to fetch character name");
  }
}
