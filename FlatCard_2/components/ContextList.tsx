import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContextList() {
  const contacts = [
    {
      id: 8761,
      uid: 'a561c81d-508e-4027-9624-84030457bdb5',
      password: 'NSmnMPhioq',
      first_name: 'Zackary',
      last_name: 'Stiedemann',
      username: 'zackary.stiedemann',
      email: 'zackary.stiedemann@email.com',
      avatar:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gender: 'Agender',
      phone_number: '+1-671 (191) 880-0505 x169',
      social_insurance_number: '577810013',
      date_of_birth: '1993-04-17',
      employment: {
        title: 'Sales Administrator',
        key_skill: 'Fast learner',
      },
      address: {
        city: 'Romagueraville',
        street_name: 'Hauck Ports',
        street_address: '9654 Sal Light',
        zip_code: '59657',
        state: 'Maryland',
        country: 'United States',
        coordinates: {
          lat: -37.0897365509554,
          lng: 164.0600614055021,
        },
      },
      credit_card: {
        cc_number: '6771-8916-1292-4171',
      },
      subscription: {
        plan: 'Premium',
        status: 'Blocked',
        payment_method: 'Money transfer',
        term: 'Monthly',
      },
    },
    {
      id: 7525,
      uid: 'e9105cba-2198-4a22-8df2-7ff97d2cadae',
      password: '7IHE0owV8M',
      first_name: 'Roy',
      last_name: 'Murazik',
      username: 'roy.murazik',
      email: 'roy.murazik@email.com',
      avatar:
        'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gender: 'Bigender',
      phone_number: '+370 (805) 314-9782',
      social_insurance_number: '175438134',
      date_of_birth: '1963-09-13',
      employment: {
        title: 'Senior Engineer',
        key_skill: 'Confidence',
      },
      address: {
        city: 'East Fredricborough',
        street_name: 'Tillman Walk',
        street_address: '72800 Patria Glen',
        zip_code: '63200',
        state: 'Colorado',
        country: 'United States',
        coordinates: {
          lat: -76.78332916879982,
          lng: -86.67665399832981,
        },
      },
      credit_card: {
        cc_number: '4380-3392-2687-9363',
      },
      subscription: {
        plan: 'Premium',
        status: 'Blocked',
        payment_method: 'Bitcoins',
        term: 'Monthly',
      },
    },
    {
      id: 2034,
      uid: 'd5841ba9-1520-4eba-bebd-4652dd21f2d7',
      password: 'JtH6WzT1uF',
      first_name: 'Hank',
      last_name: 'Hodkiewicz',
      username: 'hank.hodkiewicz',
      email: 'hank.hodkiewicz@email.com',
      avatar:
        'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gender: 'Bigender',
      phone_number: '+690 642.694.6376',
      social_insurance_number: '930322342',
      date_of_birth: '1973-03-01',
      employment: {
        title: 'Direct Healthcare Engineer',
        key_skill: 'Teamwork',
      },
      address: {
        city: 'West Jettie',
        street_name: 'Rosenbaum Street',
        street_address: '3730 Satterfield Cliff',
        zip_code: '38400-6701',
        state: 'Kentucky',
        country: 'United States',
        coordinates: {
          lat: -15.964380540198803,
          lng: -32.057639749195005,
        },
      },
      credit_card: {
        cc_number: '5432-7495-0654-1969',
      },
      subscription: {
        plan: 'Professional',
        status: 'Pending',
        payment_method: 'Paypal',
        term: 'Annual',
      },
    },
    {
      id: 9719,
      uid: '27ed7934-6108-4f1f-a8de-b7cf6881c02e',
      password: 'kbWHCEzGhn',
      first_name: 'Theron',
      last_name: 'Mohr',
      username: 'theron.mohr',
      email: 'theron.mohr@email.com',
      avatar:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gender: 'Agender',
      phone_number: '+57 1-998-252-8683',
      social_insurance_number: '412703803',
      date_of_birth: '1987-08-04',
      employment: {
        title: 'Future Advertising Representative',
        key_skill: 'Communication',
      },
      address: {
        city: 'Aubreyton',
        street_name: 'Clinton Shore',
        street_address: '153 Yundt Walk',
        zip_code: '95891-1255',
        state: 'Ohio',
        country: 'United States',
        coordinates: {
          lat: 27.32927373980111,
          lng: 50.30730190288517,
        },
      },
      credit_card: {
        cc_number: '4746557632621',
      },
      subscription: {
        plan: 'Diamond',
        status: 'Blocked',
        payment_method: 'Cash',
        term: 'Full subscription',
      },
    },
    {
      id: 3020,
      uid: 'e303b5ad-a2b0-442d-bfa2-5b889152dadd',
      password: 'EKc6lMUgRY',
      first_name: 'Clarence',
      last_name: 'Bruen',
      username: 'clarence.bruen',
      email: 'clarence.bruen@email.com',
      avatar:
        'https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gender: 'Polygender',
      phone_number: '+670 363.317.8084 x815',
      social_insurance_number: '650928278',
      date_of_birth: '1984-09-28',
      employment: {
        title: 'Hospitality Consultant',
        key_skill: 'Organisation',
      },
      address: {
        city: 'Mariaport',
        street_name: 'An Oval',
        street_address: '28877 Mueller Glens',
        zip_code: '02712',
        state: 'Oklahoma',
        country: 'United States',
        coordinates: {
          lat: 74.04669798878132,
          lng: -86.84838924598498,
        },
      },
      credit_card: {
        cc_number: '4707-3883-1968-9250',
      },
      subscription: {
        plan: 'Platinum',
        status: 'Active',
        payment_method: 'Bitcoins',
        term: 'Full subscription',
      },
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, first_name, last_name, avatar, employment}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: avatar,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>
                {first_name + ' ' + last_name}
              </Text>
              <Text style={styles.userStatus}>{employment.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textAlign: 'center',
    margin:8
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
