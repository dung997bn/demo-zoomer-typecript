<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script lang="ts">
import Vue from "vue";
import FullCalendar, { CalendarData, CalendarOptions } from "@fullcalendar/vue";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import momentPlugin from "@fullcalendar/moment";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { FullCalendarEventDto } from "@/model";
export default Vue.extend({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptionEvents: [
        {
          id: 1,
          title: "title test 1",
          start: "2020-11-04 09:00",
          end: "2020-11-04 13:00",
          index: 0,
          workplaceId: 3,
          workDetailId: 2,
          //   workplaceTimezone: "+09:00",
        },
      ] as Array<any>,
    };
  },
  computed: {
    calendarOptions(): CalendarOptions {
      return {
        plugins: [
          timeGridPlugin,
          dayGridPlugin,
          momentPlugin,
          interactionPlugin,
        ],
        initialView: "timeGridDay",
        titleFormat: "YYYY/M/D",
        headerToolbar: {
          start: "",
          center: "title",
          end: "",
        },
        allDaySlot: false,
        slotEventOverlap: false,
        slotDuration: "01:00:00",
        slotMinTime: "00:00:00",
        slotMaxTime: "24:00:00",
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
        },
        selectable: true,
        displayEventTime: false,
        events: this.calendarOptionEvents,
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
      };
    },
  },
  methods: {
    handleDateClick(data: DateClickArg) {
      console.log(data);
      //  {
      //       id: 1,
      //       title: "title test 1",
      //       start: "2020-11-04 09:00",
      //       end: "2020-11-04 13:00",
      //       index: 0,
      //       workplaceId: 3,
      //       workDetailId: 2,
      //     //   workplaceTimezone: "+09:00",
      //     },
    },
    handleEventClick() {
      alert("event event");
    },
  },
});
</script>

<style scoped></style>
