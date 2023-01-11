# Instructions

All the data for this project is located in the "data" directory.

This project was created using codesandbox.io. It is easiest to import it there following the instructions here: https://github.com/dferber90/githubbox 

This project is an exercise in creating a work order generation tool. Freight cars are selected and an origin and destination for them is selected. Some of the basic logic for this tool will be created based on the criteria below.

1. For the first task, we want to have a way to filter cars based on type.

2. Next we want to list origins and their car generators. An origin is a city, some cities have industries and railroad stations, others do not. Feel free to display some messaging if no car generators are present for a city.

3. Build an object with the data supplied in the form that will be sent to the database. Without actually contacting the database, show how you would accomplish this by console logging the data.

3A. How would you handle errors? Can you show this?

4. Each car accepts certain freight types. Each car generator accepts certain cars and outputs certain freight. Based on the car selected, only show the applicable car generators for the type of car that is selected and the freight that is output. If a user somehow selects a car or generator that is not congruent, show an error.

5. The same logic that was built in #2 will be used for destinations just a different UI element. If you want to, figure out how to make this logic as DRY and modular as possible.

6. Add validation so the same city cannot be used for origin and destination.
