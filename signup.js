$(function() {

   var apiHost = location.host.replace('www.', 'api.');
   var apiHost = "http://api.dev.divvit.com";
   var webinarURL = "http://api.dev.divvit.com/api/WebinarTimeSlots/list";

   var buildHTMLRadioOptions = function(groupName, data) {
      var html = '';
      var i, c = data.length || 0,
          item;

      for (i = 0; i < c; i++) {
          item = data[i];
          html += '<div class="row"><input class="col-sm-1" type="radio" id="'+ groupName + i + '" name="webinar'+ groupName +'" value="' + item.id + '">';
          html += '<label class="col-sm-11" control-label" for="'+ groupName + i + '">' + item.times + '</label></div>';
      }

      $('.' + groupName).append(html);
  };

   $.get( webinarURL, null, 'json' )
      .done(function(data) {
         Object.keys(data).forEach(function(key){
            buildHTMLRadioOptions(key, data[key]);
         });

      })
      .fail(function(errorResponse) {
         $("webinar").hide();
      });

   $('select[name="country"]').countryList();

   function submitForm() {
      var params = {
         data: {}
      };

      $('form.signup-form').each(function(index, form) {
         $(form).serializeArray().forEach(function(obj) {
            params.data[obj.name] = obj.value;
         });
      });

      // POST request to submit form
      $.post( /*location.protocol + '//' + */ apiHost + '/api/Merchants/signup', params, null, 'json' )
      .done(function(data) {
         $('.result-success').fadeIn();
      })
      .fail(function(errorResponse) {
         $('.result-error').html(errorResponse.responseJSON.error.message);
         $('.result-error').fadeIn();

         // reopen form
         $('.section-heading').removeClass('active').removeClass('completed');
         var firstForm = $('.signup-section').first();
         firstForm.find('.section-heading').addClass('active');
         firstForm.find('.signup-form').slideDown();

      }).always(function() {
         $('.result-waiting').hide();
      });

   }

   $('form.signup-form').find('input,select,textarea').not('[type=submit]').jqBootstrapValidation({
      submitSuccess: function ($form, event) {
         event.preventDefault();

         $('.result-error').fadeOut();

         var currentSection = $form.parents('.signup-section');
         currentSection.find('.signup-form').slideUp();
         currentSection.find('.section-heading').removeClass('active').addClass('completed');

         var nextSection = currentSection.next('.signup-section');
         if (nextSection.length > 0) {
            nextSection.find('.signup-form').slideDown();
            nextSection.find('.section-heading').addClass('active');
         } else {
            $('.result-section').fadeIn();
            submitForm();
         }
      }
   });

   $('.platform').on('click', function() {
      $('.platform').removeClass('active');
      $(this).addClass('active');

      $('input[name="shopPlatform"]').val( $(this).attr('data-platform') );

      $('.signup-submit').fadeIn();
   });

});