import Link from 'next/link'

const Team = ({ children }) => {
  return (
    <>
      {/* Team */}
      <div className='container content-space-1'>
        <div className='row mb-sm-5'>
          <div className='col-sm-6 col-lg-4 mb-7'>
            {/* Team */}
            <div className='w-65 text-center mx-auto'>
              <img
                className='img-fluid rounded-circle mb-5'
                src='../assets/img/350x350/img1.jpg'
                alt='Image Description'
              />
              <h6 className='mb-1'>Christina Kray</h6>
              <span className='d-block'>Founder / CEO</span>
              <div
                className='border-top mx-auto my-3'
                style={{ maxWidth: '5rem' }}
              />
              <p>Loves to chat about typography, you have been warned.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className='col-sm-6 col-lg-4 mb-7'>
            {/* Team */}
            <div className='w-65 text-center mx-auto'>
              <img
                className='img-fluid rounded-circle mb-5'
                src='../assets/img/350x350/img2.jpg'
                alt='Image Description'
              />
              <h6 className='mb-1'>Jeff Fisher</h6>
              <span className='d-block'>Project Manager</span>
              <div
                className='border-top mx-auto my-3'
                style={{ maxWidth: '5rem' }}
              />
              <p>
                Multidisciplinary. Drinks too much coffee. Likes sentence
                fragments.
              </p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className='col-sm-6 col-lg-4 mb-7'>
            {/* Team */}
            <div className='w-65 text-center mx-auto'>
              <img
                className='img-fluid rounded-circle mb-5'
                src='../assets/img/350x350/img3.jpg'
                alt='Image Description'
              />
              <h6 className='mb-1'>Sophia Harrington</h6>
              <span className='d-block'>Project Manager</span>
              <div
                className='border-top mx-auto my-3'
                style={{ maxWidth: '5rem' }}
              />
              <p>Loves to chat about typography, you have been warned.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className='col-sm-6 col-lg-4 mb-7'>
            {/* Team */}
            <div className='w-65 text-center mx-auto'>
              <img
                className='img-fluid rounded-circle mb-5'
                src='../assets/img/350x350/img4.jpg'
                alt='Image Description'
              />
              <h6 className='mb-1'>David Forren</h6>
              <span className='d-block'>Support Consultant</span>
              <div
                className='border-top mx-auto my-3'
                style={{ maxWidth: '5rem' }}
              />
              <p>Behind every great project is a great Google Slides deck.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className='col-sm-6 col-lg-4 mb-7'>
            {/* Team */}
            <div className='w-65 text-center mx-auto'>
              <img
                className='img-fluid rounded-circle mb-5'
                src='../assets/img/350x350/img5.jpg'
                alt='Image Description'
              />
              <h6 className='mb-1'>Amil Evara</h6>
              <span className='d-block'>UI/UX Designer</span>
              <div
                className='border-top mx-auto my-3'
                style={{ maxWidth: '5rem' }}
              />
              <p>
                Design swashbuckler. Trader of stonks. Will work for snacks.
              </p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className='col-sm-6 col-lg-4 mb-7'>
            {/* Team */}
            <div className='w-65 text-center mx-auto'>
              <img
                className='img-fluid rounded-circle mb-5'
                src='../assets/img/350x350/img6.jpg'
                alt='Image Description'
              />
              <h6 className='mb-1'>Tom Lowry</h6>
              <span className='d-block'>UI/UX Designer</span>
              <div
                className='border-top mx-auto my-3'
                style={{ maxWidth: '5rem' }}
              />
              <p>Loves to chat about typography, you have been warned.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        {/* Info */}
        <div className='text-center'>
          <p className='mb-0'>Want to join us?</p>
          <a className='link' href='../page-careers.html'>
            See all opening positions{' '}
            <i className='bi-chevron-right small ms-1' />
          </a>
        </div>
        {/* End Info */}
      </div>
      {/* End Team */}
    </>
  )
}

export default Team
