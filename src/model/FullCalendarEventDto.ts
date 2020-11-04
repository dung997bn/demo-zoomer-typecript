export class FullCalendarEventDto {
    // all default properties of Full Calendar
    /** The id */
    public id: number | null = null;
  
    /** The title */
    public title = '';
  
    /** The start time with format YYYY-MM-DD HH:mm */
    public start?: string;
  
    /** The end time with format YYYY-MM-DD HH:mm */
    public end?: string;
  
    // all extended properties
    /** The index */
    public index!: number;
  
    /** The workplace id */
    public workplaceId!: number;
  
    /** The work detail id */
    public workDetailId!: number;
  
    /** The workplace timezone */
    public workplaceTimezone!: string;
  
    constructor(init?: Partial<FullCalendarEventDto>) {
      Object.assign(this, init)
    }
  }
  