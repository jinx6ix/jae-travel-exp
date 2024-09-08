'use client'
import React, { useState } from 'react'

import classes from './index.module.scss'
import { Gutter } from '../Gutter'

const BookCarForm = () => {
  const [formData, setFormData] = useState({
    Extras_BeanBags: [],
    Extras_Binoculars: [],
    Extras_ChildSeats: [],
    Extras_Books: [],
    name: '',
    email: '',
    telephone: '',
    vehicletype: '',
    chaufferDriven: '',
    numberofadults: '',
    OutOfCountry: '',
    periodoftravel: '',
    AirportTransfer: '',
    numberofChildren: '',
    ageofChildren: '',
    checkinDate: '',
    CheckOutDate: '',
    droplocation: '',
    pickuplocation: '',
    itinerary: '',
    additionalRequest: '',
    SelfDrive: '',
    Child: '',
    DepartureTransfer: '',
  })
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleChange = e => {
    const { name, value, checked, type } = e.target
  
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter(item => item !== value),
      }))
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  
    console.log(formData)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const formattedData = {
        Extras_BeanBags: formData.Extras_BeanBags.length > 0 ? formData.Extras_BeanBags : [],
        Extras_Binoculars: formData.Extras_Binoculars.length > 0 ? formData.Extras_Binoculars : [],
        Extras_ChildSeats: formData.Extras_ChildSeats.length > 0 ? formData.Extras_ChildSeats : [],
        Extras_Books: formData.Extras_Books.length > 0 ? formData.Extras_Books : [],
        name: formData.name,
        email: formData.email,
        telephone: formData.telephone,
        vehicletype: formData.vehicletype,
        chaufferDriven: formData.chaufferDriven === 'true',
        numberofadults: parseInt(formData.numberofadults, 10) || 0,
        OutOfCountry: parseInt(formData.OutOfCountry, 10) || 0,
        periodoftravel: parseInt(formData.periodoftravel, 10) || 0,
        AirportTransfer: formData.AirportTransfer === 'true',
        numberofChildren: parseInt(formData.numberofChildren, 10) || 0,
        ageofChildren: parseInt(formData.ageofChildren, 10) || 0,
        checkinDate: formData.checkinDate,
        CheckOutDate: formData.CheckOutDate,
        droplocation: formData.droplocation,
        pickuplocation: formData.pickuplocation,
        itinerary: formData.itinerary,
        additionalRequest: formData.additionalRequest,
        SelfDrive: formData.SelfDrive === 'true',
        Child: formData.Child === 'true',
        DepartureTransfer: formData.DepartureTransfer === 'true',
      };
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: '66375bfe13ed51d2c644f305', // Form ID
          formData: formattedData,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      setSuccess('Your Bookings Have Been Submitted Successfully');
      setFormData({
        Extras_BeanBags: [],
        Extras_ChildSeats: [],
        Extras_Binoculars: [],
        Extras_Books: [],
        name: '',
        email: '',
        telephone: '',
        vehicletype: '',
        chaufferDriven: '',
        numberofadults: '',
        numberofChildren: '',
        ageofChildren: '',
        checkinDate: '',
        CheckOutDate: '',
        periodoftravel: '',
        OutOfCountry: '',
        droplocation: '',
        pickuplocation: '',
        itinerary: '',
        additionalRequest: '',
        AirportTransfer: '',
        SelfDrive: '',
        Child: '',
        DepartureTransfer: '',
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Gutter>
      <div className={classes.safariBooking}>
        <h3 className={classes.BookingHeader}>Book A Vehicle</h3>
        <hr />
        <div className={classes.bookingContainer}>
          <form className={classes.bookingForm} onSubmit={handleSubmit}>
            <div className={classes.formGroup}>
              <select
                id="vehicletype"
                name="vehicletype"
                value={formData.vehicletype}
                onChange={handleChange}
                required
                className={classes.select}
              >
                <option value="">Choose Vehicle</option>
                <option value="Toyota LandCruiser">Toyota LandCruiser</option>
                <option value="Toyota Prado">Toyota Prado</option>
                <option value="Photography Vehicle">Photography Vehicle</option>
                <option value="Toyota LandCruiser With WheelChair">
                  Toyota LandCruiser With WheelChair
                </option>
                <option value="Minivan">Minivan</option>
                <option value="Top Camper & Roof Top Camping">Top Camper & Roof Top Camping</option>
              </select>
            </div>
            <div className={classes.flex}>
              <div className={classes.formGroup}>
                <div className={classes.RadioContainer}>
                  <label className={classes.label}>Chauffer Driven</label>
                  <div className={classes.radioFlex}>
                    <div>
                      <div className={classes.checkbox}>
                        <div>
                          <span className={classes.ratingsize}>Yes</span>
                        </div>
                        <div>
                        <input
                          type="radio"
                          name="chaufferDriven"
                          id="chaufferDriven"
                          value="true"
                          checked={formData.chaufferDriven === 'true'}
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className={classes.checkbox}>
                          <div>
                            <span className={classes.ratingsize}>No</span>
                          </div>
                          <div>
                          <input
                              type="radio"
                              name="chaufferDriven"
                              id="chaufferDriven"
                              value="false"
                              checked={formData.chaufferDriven === 'false'}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Self Drive</label>
                <div className={classes.radioFlex}>
                  <div>
                    <div className={classes.checkbox}>
                      <div>
                        <span className={classes.ratingsize}>Yes</span>
                      </div>
                      <div>
                      <input
                          type="radio"
                          name="SelfDrive"
                          id="SelfDrive"
                          value="true"
                          checked={formData.SelfDrive === 'true'}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className={classes.checkbox}>
                        <div>
                          <span className={classes.ratingsize}>No</span>
                        </div>
                        <div>
                        <input
                          type="radio"
                          name="SelfDrive"
                          id="SelfDrive"
                          value="false"
                          checked={formData.SelfDrive === 'no'}
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.flex}>
              <div className={classes.formGroup}>
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <input
                  type="tel"
                  id="telephone"
                  placeholder="Telephone No"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={classes.formGroup}>
              <input
                placeholder="No Of adults"
                type="number"
                id="numberofadults"
                name="numberofadults"
                value={formData.numberofadults}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.flex}>
              <div className={classes.formGroup}>
                <label className={classes.label}>Child?</label>
                <div className={classes.radioFlex}>
                  <div>
                    <div className={classes.checkbox}>
                      <div>
                        <span className={classes.ratingsize}>Yes</span>
                      </div>
                      <div>
                      <input
                          type="radio"
                          name="Child"
                          id="Child"
                          value="true"
                          checked={formData.Child === 'yes'}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className={classes.checkbox}>
                        <div>
                          <span className={classes.ratingsize}>No</span>
                        </div>
                        <div>
                        <input
                          type="radio"
                          name="Child"
                          id="Child"
                          value="false"
                          checked={formData.Child === 'no'}
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.formGroup}>
                <input
                  placeholder="No Of Children"
                  type="number"
                  id="numberofChildren"
                  name="numberofChildren"
                  value={formData.numberofChildren}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={classes.formGroup}>
                <input
                  placeholder="Age's"
                  type="number"
                  id="ageofChildren"
                  name="ageofChildren"
                  value={formData.ageofChildren}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={classes.flex}>
              <div className={classes.formGroup}>
                <label className={classes.label}>Check In Date</label>
                <input
                  type="date"
                  placeholder="Check In Date"
                  id="checkinDate"
                  name="checkinDate"
                  value={formData.checkinDate}
                  onChange={handleChange}
                  required
                  className={classes.input}
                />
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Check Out Date</label>
                <input
                  type="date"
                  placeholder="Check Out Date"
                  id="CheckOutDate"
                  name="CheckOutDate"
                  value={formData.CheckOutDate}
                  onChange={handleChange}
                  required
                  className={classes.input}
                />
              </div>
            </div>
            <div className={classes.flex}>
              {/* <div className={classes.formGroup}>
                <label className={classes.label}>Number Of Days</label>
                <input
                  placeholder="Period Of travel"
                  type="number"
                  id="periodiftravel"
                  name="periodiftravel"
                  value={formData.periodiftravel}
                  onChange={handleChange}
                  required
                />
              </div> */}
              <div className={classes.formGroup}>
                <label className={classes.label}>Pick Up Location Of Vehicle </label>
                <input
                  placeholder="If Not nairobi Do mention Location"
                  type="text"
                  id="pickuplocation"
                  name="pickuplocation"
                  value={formData.pickuplocation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Drop Of Location Of Vehicle </label>
                <input
                  placeholder="If Not nairobi Do mention Location"
                  type="text"
                  id="droplocation"
                  name="droplocation"
                  value={formData.droplocation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={classes.flex}>
              <div className={classes.formGroup}>
                <label className={classes.label}>Out Of Country?</label>
                <div className={classes.radioFlex}>
                  <div>
                    <div className={classes.checkbox}>
                      <div>
                        <span className={classes.ratingsize}>Yes</span>
                      </div>
                      <div>
                      <input
                          type="radio"
                          name="OutOfCountry"
                          id="OutOfCountry"
                          value="true"
                          checked={formData.OutOfCountry === 'Yes'}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className={classes.checkbox}>
                        <div>
                          <span className={classes.ratingsize}>No</span>
                        </div>
                        <div>
                        <input
                          type="radio"
                          name="OutOfCountry"
                          id="OutOfCountry"
                          value="false"
                          checked={formData.OutOfCountry === 'no'}
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Number Of Days Out Of Kenya</label>
                <input
                  placeholder="Period Of travel"
                  type="number"
                  id="periodoftravel"
                  name="periodoftravel"
                  value={formData.periodoftravel}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>Day To Day Itinerary</label>
              <textarea
                placeholder="Kindly Provide Itinerary On Your Travels"
                id="itinerary"
                name="itinerary"
                value={formData.itinerary}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.flex}>
              <div className={classes.formGroup}>
                <label className={classes.label}>AirPort Transfer</label>
                <div className={classes.radioFlex}>
                  <div>
                    <div className={classes.checkbox}>
                      <div>
                        <span className={classes.ratingsize}>Yes</span>
                      </div>
                      <div>
                      <input
                          type="radio"
                          name="AirportTransfer"
                          id="AirportTransfer"
                          value="true"
                          checked={formData.AirportTransfer === 'Yes'}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className={classes.checkbox}>
                        <div>
                          <span className={classes.ratingsize}>No</span>
                        </div>
                        <div>
                        <input
                          type="radio"
                          name="AirportTransfer"
                          id="AirportTransfer"
                          value="false"
                          checked={formData.AirportTransfer === 'no'}
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Departure Transfer</label>
                <div className={classes.radioFlex}>
                  <div>
                    <div className={classes.checkbox}>
                      <div>
                        <span className={classes.ratingsize}>Yes</span>
                      </div>
                      <div>
                      <input
                          type="radio"
                          name="DepartureTransfer"
                          id="DepartureTransfer"
                          value="true"
                          checked={formData.DepartureTransfer === 'yes'}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className={classes.checkbox}>
                        <div>
                          <span className={classes.ratingsize}>No</span>
                        </div>
                        <div>
                        <input
                          type="radio"
                          name="DepartureTransfer"
                          id="DepartureTransfer"
                          value="false"
                          checked={formData.DepartureTransfer === 'no'}
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className={classes.flex}>
                <div className={classes.formGroup}>
                  <label className={classes.label}>Extras</label>
                  <div className={classes.radioFlex}>
                    <div>
                      <div className={classes.Radiobox}>
                        <div>
                          <span className={classes.ExtraLabel}>Bean Bags</span>
                        </div>
                        <div>
                        <input
                          type="checkbox"
                          name="Extras_BeanBags"
                          id="Extras_BeanBags"
                          value="Bean Bags"
                          checked={formData.Extras_BeanBags.includes('Bean Bags')}
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className={classes.Radiobox}>
                          <div>
                            <span className={classes.ExtraLabel}>Child Seats</span>
                          </div>
                          <div>
                          <input
                            type="checkbox"
                            name="Child_Seats"
                            id="Child_Seats"
                            value="Child Seats"
                            checked={formData.Extras_ChildSeats.includes('Child Seats')}
                            onChange={handleChange}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className={classes.Radiobox}>
                          <div>
                            <span className={classes.ExtraLabel}>Binoculars</span>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              name="Extras_Binoculars"
                              id="Extras_Binoculars"
                              value="Binoculars"
                              checked={formData.Extras_Binoculars.includes('Binoculars')}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className={classes.Radiobox}>
                          <div>
                            <span className={classes.ExtraLabel}>Books</span>
                          </div>
                          <div>
                          <input
                              type="checkbox"
                              name="Books"
                              id="Books"
                              value="Books"
                              checked={formData.Extras_Books.includes('Books')}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>Any Additional Requests</label>
              <textarea
                placeholder="Kindly Provide Itinerary On Your Travels"
                id="additionalRequest"
                name="additionalRequest"
                value={formData.additionalRequest}
                onChange={handleChange}
                required
              />
            </div>

            <button className={classes.submitBtn} type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {success && <p className={classes.success}>{success}</p>}
            {error && <p className={classes.error}>{error}</p>}
          </form>
        </div>
      </div>
    </Gutter>
  )
}

export default BookCarForm
