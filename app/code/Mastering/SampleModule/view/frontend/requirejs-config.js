var config = {
    map: {
        '*': {
            'mage/validation':'Mastering_SampleModule/js/validation',
            'Magento_Checkout/js/sidebar': 'Mastering_SampleModule/js/sidebar'
        }
    },
    config: {
        mixings: {
            'Mastering_SampleModule/js/validation': {
                'Mastering_SampleModule/js/validation-mixin': true
            },
            'Mastering_SampleModule/js/sidebar': {
                'Mastering_SampleModule/js/sidebar-mixin': true
            },
        }
    }
};
