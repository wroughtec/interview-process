// @flow
import { started, inProgress, done } from 'consts/processStage';

const applied: ColumnDataType = {
  id: started,
  title: 'Applied',
  data: started,
  btnRight: inProgress
};

const interviewing: ColumnDataType = {
  id: inProgress,
  title: 'Interviewing',
  data: inProgress,
  btnRight: done,
  btnLeft: started
};

const hired: ColumnDataType = {
  id: done,
  title: 'Hired',
  data: done,
  btnLeft: inProgress
};

export const columnData: ColumnDataType[] = [applied, interviewing, hired];
