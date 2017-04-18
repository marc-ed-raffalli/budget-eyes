---
title:      Documentation
lang:       en
ref:        documentation
layout:     page
permalink:  /en/documentation/
---


The application helps to keep track of expenses and allows the users to associate metadata to each expense (date, description, tags).


## Concepts

The chapters below explain in details the different concepts and how to leverage them.



### Expenses

The `expenses` are represented by an amount spent on a certain date and associated to certain `tags` / categories.

This is the main data, it is important to read about `tags` and set a categorization first.



### Tags

The `tags` (equiv. categories) are used to establish a classification of the expenses based on each expense's associated tags.

The users create and personalize their own tags to build their classification. 
Because a user can associate multiple tags to a single expense, they can visualize easily how much is spent for each tag.

**Example:** Assuming the following tags:

|-------------------------|--------------------------------------------------------|
| *Food*                  | all food related expenses                              |
| *Daily drink*           | the daily coffee/tea taken at work                     |
| *Daily lunch*           | the daily meal at work                                 |
| *Daily snack*           | the daily treat/fruit for the afternoon break at work  |
| *Restaurant / Takeaway* | special occasion or empty fridge                       |


The general tag *Food* should be used to log all food related expenses, then a more specific tag e.g. *Daily lunch* should be added to narrow the description.
The overview panel allows to see how much was spent for each tag e.g. for *Food*, *Daily lunch*, etc.

The `budgets` feature allows to easily calculate and keep an eye on how much is spent at work in the above case (tags: *Daily drink*, *Daily lunch* and *Daily snack*). 

Any tag can be updated, all changes are reflected anywhere the tag is used.
Tags can also be added / removed anytime from any budget or expenses, but a **tag cannot be deleted** (as for now).



### Budgets

A `budget` helps to monitor what is spent on a weekly or monthly basis on a selection of tags.

**Example:** 

Considering the tags described in the example above, in the `Tags` section.

It is possible to monitor what is spent on food at work by creating a dedicated budget. 
This budget should have an estimated total for a given period, either weekly or monthly and list the tags *Daily drink*, *Daily lunch* and *Daily snack*.
The estimated total can be updated anytime, it is used to represent a threshold. 



## Application Screens overview

- [Expense Screens]({{site.baseurl}}{% link pages/en/documentation/expense-screens.md %})
- [Budget Screens]({{site.baseurl}}{%  link pages/en/documentation/budget-screens.md  %})
- [Tag Screens]({{site.baseurl}}{%     link pages/en/documentation/tag-screens.md     %})
- [Overview Screen]({{site.baseurl}}{% link pages/en/documentation/overview-screen.md %})
- [Settings Screen]({{site.baseurl}}{% link pages/en/documentation/settings-screen.md %})
