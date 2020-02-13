-- old table parameters, using true/false instead of 1/0 (tinyInt)
-- insert into Intakes (water, meditation, medication, interaction, Goal, Food) 
-- values ("14", "true", "false", "false", "completed project 2", "true");

-- new table params using 1 and 0 
-- make sure that toggle buttons return 1 and 0 and not "true" and "false"
-- sending pills: false to table (no "i dont do this button" action)
insert into Intakes (water, waterAmount, meditation, pills, interaction, goal, whatGoal, food) 
values (1, 25, 1, 0, 1, 1, "inspiring quotes api", 1);

-- sending water: false and waterAmount: 0 to table (user enters 0 for waterAmount)
insert into Intakes (water, waterAmount, meditation, pills, interaction, goal, whatGoal, food)
values (0, 0, 1, 0, 1, 1, "inspiring quotes api", 1);

-- sending water: false and waterAmount: null to table (user enters nothing for waterAmount)
insert into Intakes (water, meditation, pills, interaction, goal, whatGoal, food)
values (0, 1, 0, 1, 1, "inspiring quotes api", 1);

-- sending pills: null to table ("i dont do this button action")
insert into Intakes (water, waterAmount, meditation, interaction, goal, whatGoal, food) 
values (1, 37, 1, 1, 1, "inspiring quotes api", 1);

-- sending more null values / using old table seed values from above
insert into Intakes (water, meditation, pills, interaction, goal, food) 
values ("14", 1, 0, 1, "completed project 2", 1);