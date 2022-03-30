import React,{ useState } from 'react';

import { Calendar, Card, Button, Modal } from 'antd';

import ReactEcharts from 'echarts-for-react';

import AppointmentsTable from '../../../layout/components/appointmentsTable/AppointmentsTable';
import hospitalOptions from './charts/hospital-options';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { incomeInWeek, incomeInMonth } from './charts/income-options';

import {
  patientsGenderOptions,
  departmentsOptions,
  patientsAgeOptions
} from './charts/patients-options';

import { useFetchPageData, usePageData } from '../../../hooks/usePage';

import { IAppointment } from '../../../interfaces/patient';
import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  fulFilled: false,
  breadcrumbs: [
    {
      title: 'Dashboards',
      route: 'default-dashboard'
    },
    {
      title: 'Default'
    }
  ]
};

const DashboardPage = () => {
  const [appointments] = useFetchPageData<IAppointment[]>('./data/last-appointments.json', []);
  usePageData(pageData);
  const [event, setEvent] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const setDate = (day: number, hour: number = 0) => {
    const date = new Date();

    date.setDate(date.getDate() + day);
    date.setHours(date.getHours() + hour);

    return date;
  };
  const events = [
    {
      title: 'Appointment',
      color: '#e9e165',
      classNames: ['event-error'],
      start: setDate(0, 2),
      end: setDate(0, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Appointment',
      color: '#f56565',
      start: setDate(1, -1),
      end: setDate(1, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Appointment',
      color: '#4299e1',
      start: setDate(1),
      classNames: ['event-pink'],
      end: setDate(1, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Appointment',
      color: '#ed5564',
      classNames: ['event-orange'],
      start: setDate(1, -3),
      end: setDate(1, -2),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Appointment',
      color: '#e9e165',
      start: setDate(3, -5),
      end: setDate(4),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Appointment',
      color: '#e9e165',
      classNames: ['event-green'],
      start: setDate(5, 10),
      end: setDate(6),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];
  const handleEventClick = (arg: any) => {
    setEvent(arg.event);
    setModalVisibility(true);
  };
  const closeModal = () => setModalVisibility(false);
  let modalBody, modalTitle, modalFooter;

  if (event) {
    modalBody = (
      <div className='d-flex flex-column'>
        <div className='event-time flex-column mb-4'>
          <h5 className='event-title m-0'>Event time</h5>
          <span>
            From: {event.start.toDateString()} - to: {event.end.toDateString()}
          </span>
        </div>

        <div className='event-desc flex-column'>
          <h5 className='event-title m-0'>Event description</h5>
          <span>{event.extendedProps.desc}</span>
        </div>
      </div>
    );

    modalTitle = (
      <div className='title-block p-0 m-0'>
        <h3 style={{ color: event.backgroundColor }} className='modal-title m-0'>
          {event.title}
        </h3>
      </div>
    );

    modalFooter = (
      <div className='d-flex justify-content-between modal-footer'>
        <Button onClick={closeModal} danger>
          Close
        </Button>
        <Button type='primary'>Change event</Button>
      </div>
    );
  }

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-first-aid-alt'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Appointments</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>
                  213
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-wheelchair'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>New patients</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>
                  213
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-blood'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Operations</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>
                  23
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-dollar-true'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Earnings</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>
                  $5238
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Card className='mb-0'>
        <FullCalendar
          events={events}
          initialView='dayGridMonth'
          plugins={[dayGridPlugin]}
          dayMaxEvents={true}
          weekends
        />
      </Card>
      <Card title='Last appointments' className='mb-0'>
        <AppointmentsTable data={appointments} />
      </Card>
    </>
  );
};

export default DashboardPage;
