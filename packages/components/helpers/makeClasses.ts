export function makeGroupClasses(
  userGroupClasses?: Record<string, string|false|undefined>|false,
  defaultGroupClasses: Record<string, string|undefined> = {}
) {
  //if userGroupClasses is false, it means 
  //the user doesn't want to use any classes
  if (userGroupClasses === false) {
    return {};
  //if userGroupClasses is undefined, make it an empty object
  } else if (!userGroupClasses) {
    userGroupClasses = {};
  }
  //otherwise, create a new object to store the group classes
  const groupClasses: Record<string, string|undefined> = {};
  for (const key in defaultGroupClasses) {
    groupClasses[key] = makeClasses(
      userGroupClasses[key], 
      defaultGroupClasses[key]
    );
  }
  return groupClasses;
}

export default function makeClasses(
  userClasses: string|false|undefined,
  defaultClasses?: string
) {
  //if userClasses is false, it means 
  //the user doesn't want to use any classes
  if (userClasses === false) {
    return '';
  //if userClasses is undefined, make it an empty string
  } else if (!userClasses) {
    userClasses = '';
  }
  //otherwise, create a new string[] to store the classes
  const classes: string[] = [];
  //if defaultClasses is defined, add it to the classes
  if (defaultClasses) {
    classes.push(defaultClasses);
  }
  //if userClasses is defined, add it to the classes
  if (userClasses) {
    classes.push(userClasses);
  }
  return classes.join(' ').trim() || undefined;
}