export default () => (
  <form
    action="https://app.convertkit.com/forms/1563310/subscriptions"
    className=" flex flex-col mt-4 lg:mt-16 lg:w-2/5 animate__animated animate__fadeInUp animate__delay-1s seva-form formkit-form"
    method="post"
    data-sv-form="1563310"
    data-uid="db6cdfd719"
    data-format="inline"
    data-version="5"
    data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;redirect_url&quot;:&quot;&quot;,&quot;success_message&quot;:&quot;Awesome! Now check your email to confirm your subscription.&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;custom_content&quot;:&quot;&quot;,&quot;action&quot;:&quot;show&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
    min-width="400 500 600 700 800"
  >
    <div data-style="clean">
      <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />
      <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
        <div className="formkit-field">
          <input
            className="formkit-input text-sm lg:text-lg"
            aria-label="Name"
            style={{
              color: '#828282', borderColor: '#E0E0E0', borderRadius: 5, fontWeight: 700,
            }}
            name="fields[first_name]"
            required
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="formkit-field">
          <input
            className="formkit-input text-sm lg:text-lg"
            name="email_address"
            style={{
              color: '#828282', borderColor: '#E0E0E0', borderRadius: 5, fontWeight: 700,
            }}
            placeholder="Email"
            required
            type="email"
          />
        </div>
        <button
          type="submit"
          data-element="submit"
          className="formkit-submit formkit-submit"
          style={{
            color: '#FAFAFA', backgroundColor: '#4FA3E3', borderRadius: 5, fontWeight: 700,
          }}
        >
          <div className="formkit-spinner">
            <div />
            <div />
            <div />
          </div>
          <span className="text-sm lg:text-lg">Keep me posted!</span>
        </button>
      </div>
      <a
        href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
        className="formkit-powered-by"
        data-element="powered-by"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered By
        ConvertKit
      </a>
    </div>
  </form>
);
