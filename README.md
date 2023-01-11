# Instructions

All the data for this project is located in the "data" directory.

This project is a work order generation tool. Freight cars are selected and an origin and destination for them is selected. Some of the basic logic for this tool will be created based on the criteria below.

1. For the first task, we want to have a way to filter cars based on type.

2. Next we want to list origins and their car generators.

3. Build an object with the data supplied in the form that will be sent to the database. Without actually contacting the database, show how you would accomplish this by console logging the data.

3A. How would you handle errors? Can you show this?

4. Each car accepts certain freight types. Each car generator accepts certain cars and outputs certain freight. Based on the car selected, only show the applicable car generators for the type of car that is selected and the freight that is output.

5. The same logic that was built in #2 will be used for destinations just a different UI element.

6. Add validation for the same city cannot be used for origin and destination.
