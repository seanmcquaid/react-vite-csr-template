import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash/isEqual';

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export default createDeepEqualSelector;
