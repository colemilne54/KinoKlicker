import { Select } from '@mantine/core';

export default function Drop() {
    return (
        <Select
          label="Your favorite framework/library"
          placeholder="Pick one"
          searchable
          nothingFound="No options"
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
      )
}